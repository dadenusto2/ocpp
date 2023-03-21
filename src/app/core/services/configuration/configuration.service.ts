import {Injectable} from '@angular/core';
import {asyncScheduler, of} from 'rxjs';
import {ConnectionService} from '../connection/connection.service';
import {OcppClientActions, OcppMessageTypes, OcppServerActions} from '../messaging/types';
import {catchError, observeOn, tap} from 'rxjs/operators';
import {MessagingService} from '../messaging/messaging.service';
import {OcppCallMessage} from '../messaging/general';
import {IGetConfigurationReq} from '../messaging/serverActions';


@Injectable({
    providedIn: 'root'
})
export class ConfigurationService {
    constructor(
        private readonly _connectionService: ConnectionService,
        private readonly _messagingService: MessagingService,
    ) {

        this._connectionService.message$
            .pipe(
                observeOn(asyncScheduler),
                tap(({message: m}) => {
                    if (m[0] === OcppMessageTypes.CALL) {
                        console.log(m);
                        if (m[2] === OcppServerActions.getConfiguration) {
                            this.onGetConfiguration(m);
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

    onGetConfiguration(message: OcppCallMessage<IGetConfigurationReq>) {
        if (message[3].key.includes('ConnectionTimeOut')) {
            this._messagingService.sendConfMessage(message[1], {
                configurationKey: [
                    {
                        key: 'ConnectionTimeOut',
                        value: '10',
                        readonly: false
                    }
                ]
            }).subscribe();
        }
    }

}
