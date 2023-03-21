import {
    OcppMessageTypes,
    OcppClientActions,
    OcppMessageErrorCodes,
    OcppServerActions
} from './enums';
import {
    ChargePointConfMessagesPayload,
    ChargePointReqMessagesPayload
} from './clientActions';
import {ServerConfMessagePayload} from './serverActions';

export type OcppCallMessage<T = ChargePointReqMessagesPayload> =
    [OcppMessageTypes, string, OcppClientActions, T];

export type OcppCallMessageObject<T = null> = {
    type: OcppMessageTypes;
    uniqueId: string;
    action: OcppClientActions | OcppServerActions;
    payload: T;
}

export type OcppCallResultMessage<T = ServerConfMessagePayload | ChargePointConfMessagesPayload> =
    [OcppMessageTypes.CALLRESULT, string, T];
export type OcppCallResultMessageObject<T> = {
    type: OcppMessageTypes.CALLRESULT;
    uniqueId: string;
    payload: T | null;
}

export type OcppErrorMessage =
    [OcppMessageTypes.CALLERROR, string, OcppMessageErrorCodes, string, {[key: string]: any}?];
export type OcppErrorMessageObject = {
    type: OcppMessageTypes.CALLERROR;
    uniqueId: string;
    errorCode: OcppMessageErrorCodes;
    errorDescription: string;
    errorDetails: {[key: string]: any};
}

export interface IConnector {
    uuid: string;
    typeUuid: string;
}

export interface ITransaction {
    transactionId: number;
    customerIdToken: string;
    meterStart: number;
    meterStop: number;
    connectorUuid: string;
    startTimestamp: string;
    stopTimestamp: string;
    reason: string;
    priceValue: number;
    updatedAt: string;
    balanceOperationUuid: string;
}
