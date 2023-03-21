import {
    RemoteStartStopStatus, ConfigurationStatus
} from './enums';

export interface IOcppChargingSchedulePeriod {
    /**
     * Start of the period, in seconds from the start of schedule. The value of
     * StartPeriod also defines the stop time of the previous period.
     */
    startPeriod: number;
    /**
     * Charging rate limit during the schedule period, in the applicable
     * chargingRateUnit
     */
    limit: number;
    /**
     * The number of phases that can be used for charging. If a number of
     * phases is needed, numberPhases=3 will be assumed unless another number is
     * given
     */
    numberPhases?: number;
}

export interface IRemoteStartTransactionReq {
    connectorId?: number;
    idTag: string;
    chargingProfile?: any;
}

export interface IRemoteStartTransactionConf {
    status: RemoteStartStopStatus;
}

// changeConfiguration

export interface IChangeConfigurationReq {
    key: string;
    value: string;
}

export interface IChangeConfigurationConf {
    status: ConfigurationStatus;
}

// remoteStopTransaction

export interface IRemoteStopTransactionReq {
    transactionId: number;
}

export interface IRemoteStopTransactionConf {
    status: RemoteStartStopStatus;
}

// getConfiguration

export interface IKeyValue {
    key: string;
    readonly: boolean;
    value?: string;
}

export interface IGetConfigurationReq {
    key: string[];
}

export interface IGetConfigurationConf {
    configurationKey?: IKeyValue[];
    unknownKey?: string[];
}

export type ServerReqMessagePayload =
    IRemoteStartTransactionReq |
    IRemoteStopTransactionReq |
    IChangeConfigurationReq;
export type ServerConfMessagePayload =
    IRemoteStartTransactionConf |
    IRemoteStopTransactionConf |
    IChangeConfigurationConf;
