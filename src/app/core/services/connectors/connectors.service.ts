import {Injectable} from '@angular/core';
import {asyncScheduler, of, Subscription, timer, Observable, BehaviorSubject, Subject} from 'rxjs';
import {ConnectionService} from '../connection/connection.service';
import {IMeterValue, IMeterValueReq} from '../messaging/clientActions';
import {Measurand} from '../messaging/enums';
import {ChargePointErrorCode, ChargePointStatus, UnitOfMeasure} from '../messaging/graphql';
import {OcppClientActions, OcppMessageTypes, OcppServerActions} from '../messaging/types';
import {catchError, observeOn, tap, switchMap, takeUntil, filter} from 'rxjs/operators';
import {MessagingService} from '../messaging/messaging.service';
import {OcppCallMessage} from '../messaging/general';

interface ConnectorStartTransaction {
    idTag: string;
    transactionId?: number;
}

/**
 * Connector class
 * Manages connector state and do not interact directly with OCPP server
 * (use ConnectorsService for this purpose)
 */
export class MockConnector {
    // TODO: replace primitive values with BehaviorSubject
    transactionId: number | null = null;
    meterValue: number = 0;
    connectorId: number;
    soc$: BehaviorSubject<number> = new BehaviorSubject(0);
    powerActiveImport$: BehaviorSubject<number> = new BehaviorSubject(0);
    transactionStop$: Subject<void> = new Subject<void>();
    autoSendMeterValues: boolean = true;
    meterValueSendSubscription: Subscription;

    private _meterValuesAutoUpdateSubscription: Subscription;
    private _meterValueTimerSubscription: Subscription;

    /**
     * Automatically send startTransaction request
     * on RemoteStartTransaction call
     */
    autoStartTransaction: boolean = true;
    autoStopTransaction: boolean = true;
    /**
     * Automatically send meterValues
     */
    autoMeterValues: boolean = true;
    idTag: string;

    constructor({connectorId}: {connectorId: number}) {
        this.connectorId = connectorId;
    }

    startTransaction({transactionId, idTag}: ConnectorStartTransaction) {
        this.transactionId = transactionId;
        this.idTag = idTag;

        if (this._meterValuesAutoUpdateSubscription) {
            this._meterValuesAutoUpdateSubscription.unsubscribe();
        }

        this._meterValuesAutoUpdateSubscription = timer(0, 5000)
            .pipe(
                tap(() => {
                    // round to two number after comma
                    const socIncrementValue = Math.round(Math.random() * 5 * 100) / 100;
                    this.soc$.next(Math.min(100, this.soc$.value + socIncrementValue));
                    this.powerActiveImport$.next(Math.floor(Math.random() * 22 * 1000));
                })
            ).subscribe();

        if (this.autoMeterValues) {
            this._meterValueTimerSubscription = timer(0, 5000)
                .pipe(
                    filter(() => this.autoMeterValues),
                    tap(() => {
                        this.meterValue = this.meterValue + Math.round(100 * Math.random());
                    }),
                )
                .subscribe() ;
        }

        return {
            meterStart: this.meterValue
        };
    }

    stopTransaction() {
        this.transactionId = null;
        this.idTag = null;

        if (this._meterValuesAutoUpdateSubscription) {
            this._meterValuesAutoUpdateSubscription.unsubscribe();
        }

        if (this._meterValueTimerSubscription) {
            this._meterValueTimerSubscription.unsubscribe();
        }

        this.soc$.next(0);
        this.transactionStop$.next();

        return {
            meterStop: this.meterValue,
            idTag: this.idTag
        };
    }
}

@Injectable({
    providedIn: 'root'
})
export class ConnectorsService {
    connectors: MockConnector[];
    constructor(
        private readonly _connectionService: ConnectionService,
        private readonly _messagingService: MessagingService,
    ) {
        this.connectors = [
            new MockConnector({connectorId: 1}),
            new MockConnector({connectorId: 2}),
            new MockConnector({connectorId: 3})
        ];

        this._connectionService.message$
            .pipe(
                observeOn(asyncScheduler),
                tap(({message: m}) => {
                    if (m[0] === OcppMessageTypes.CALL) {
                        if (m[2] === OcppServerActions.remoteStartTransaction) {
                            const {idTag, connectorId, chargingProfile} = m[3];

                            this._messagingService.sendConfMessage(m[1], {
                                status: 'Accepted'
                            }).subscribe();

                            const connector = this.getConnectorById(connectorId);

                            if (connector.autoStartTransaction) {
                                this.startTransaction({
                                    transactionId: chargingProfile?.transactionId,
                                    idTag,
                                    connectorId
                                });
                            } else {
                                connector.idTag = idTag;
                                connector.transactionId = chargingProfile?.transactionId;
                            }
                        }

                        if (m[2] === OcppServerActions.remoteStopTransaction) {
                            const { transactionId } = m[3];

                            this._messagingService.sendConfMessage(m[1], {
                                status: 'Accepted'
                            }).subscribe();

                            const connector = this.getConnectorByTransactionId(transactionId);

                            if (connector?.autoStopTransaction || !connector) {
                                this.onRemoteStopTransactionCall(m);
                            }
                        }
                    }
                }),
                catchError((err) => {
                    console.error(err);
                    return of({message: []});
                })
            )
            .subscribe({error: (err) => console.log(err)});
    }

    onRemoteStopTransactionCall(m: OcppCallMessage<any>) {
        this._messagingService.sendConfMessage(m[1], {
            status: 'Accepted'
        }).subscribe();

        const {transactionId} = m[3];

        this.stopTransaction({
            transactionId
        });
    }

    startTransaction(options: ConnectorStartTransaction & {connectorId: number, meterStart?: number}) {
        const connector = this.getConnectorById(options.connectorId);
        const {meterStart} = connector.startTransaction(options);

        connector.meterValueSendSubscription = timer(0, 5000)
            .pipe(
                filter(() => connector.autoSendMeterValues),
                switchMap(() => {
                    return this.sendMeterValues({connectorId: connector.connectorId});
                })
            ).subscribe();

        connector.soc$
            .pipe(
                takeUntil(connector.transactionStop$)
            )
            .subscribe((value) => {
                if (value >= 100) {
                    this.stopTransaction({transactionId: connector.transactionId});
                }
            });

        this.sendStartTransaction({
            timestamp: (new Date()).toISOString(),
            idTag: options.idTag,
            connectorId: options.connectorId,
            meterStart: options.meterStart || meterStart
        })
        .pipe(
            tap(({message}) => {
                connector.transactionId = message[2].transactionId;
            })
        )
        .subscribe();
    }

    sendStartTransaction(payload) {
        return this._messagingService.sendCallMessage(
            OcppClientActions.startTransaction,
            payload
        );
    }

    stopTransaction({transactionId}: {transactionId: number}) {
        let connector =  this.getConnectorByTransactionId(transactionId);

        if (!connector) {
            console.warn(`Cannot find connector by transaction id ${transactionId}\n` +
                `using first connector`);
            connector = this.connectors[0];
        }

        if (connector.meterValueSendSubscription) {
            connector.meterValueSendSubscription.unsubscribe();
        }

        const {meterStop} = connector.stopTransaction();
        this.sendStopTransaction({
            meterStop,
            timestamp: (new Date()).toISOString(),
            transactionId
        }).subscribe();
    }

    sendStopTransaction(payload) {
        return this._messagingService.sendCallMessage(
            OcppClientActions.stopTransaction,
            payload
        );
    }

    getConnectorById(connectorId: number) {
        return this.connectors.find(c => c.connectorId === connectorId);
    }

    getConnectorByTransactionId(transactionId: number) {
        return this.connectors.find(c => c.transactionId === transactionId);
    }

    sendStatusNotification(options: {connectorId: number, status: ChargePointStatus}) {
        const {connectorId, status} = options;

        return this._messagingService.sendCallMessage(OcppClientActions.statusNotification, {
            connectorId,
            status,
            errorCode: ChargePointErrorCode.NoError
        });
    }

    /**
     * Send OCPP meterValues.req
     */
    sendMeterValues({connectorId, transactionId, meterValues}: {
        connectorId: number,
        transactionId?: number,
        meterValues?: IMeterValue[]
    }): Observable<any> {
        const connector = this.getConnectorById(connectorId);
        const payload: IMeterValueReq = {
            connectorId,
            transactionId: transactionId ?? connector.transactionId,
            meterValue: meterValues ?? [{
                timestamp: (new Date()).toISOString(),
                sampledValue: [
                    {
                        measurand: Measurand.EnergyActiveImportRegister,
                        unit: UnitOfMeasure.Wh,
                        value: connector.meterValue.toString()
                    },
                    {
                        measurand: Measurand.Soc,
                        unit: UnitOfMeasure.Percent,
                        value: connector.soc$.value.toString()
                    },
                    {
                        measurand: Measurand.PowerActiveImport,
                        unit: UnitOfMeasure.W,
                        value: connector.powerActiveImport$.value.toString()
                    }
                ]
            }]
        };

        return this._messagingService.sendCallMessage(
            OcppClientActions.meterValues,
            payload
        );
    }
}
