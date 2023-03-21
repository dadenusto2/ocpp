import {
    AuthorizationStatus,
    ReadingContext,
    Measurand,
    Phase,
    RegistrationStatus,
} from './enums';
import {
    ChargePointErrorCode,
    TransactionStopReason,
    ChargePointStatus,
    UnitOfMeasure,
    Location,
    ValueFormat
} from './graphql';

export interface IBootNotificationReq {
    chargePointModel: string;
    chargePointVendor: string;
    /**
     * This contains a value that identifies the serial number of
     * the Charge Box inside the Charge Point. Deprecated, will be
     * removed in future version
     *
     * @deprecated
     */
    chargeBoxSerialNumber?: string;
    chargePointSerialNumber?: string;
    firmwareVersion?: string;
    iccid?: string;
    imsi?: string;
    meterSerialNumber?: string;
    meterType?: string;
}

export interface IBootNotificationConf {
    currentTime: string; // dateTime
    interval: number; // in seconds
    status: RegistrationStatus;
}

export type HeartbeatReq = null;
export interface IHeartbeatConf {
    currentTime: string;
}

export interface IStartTransactionReq {
    connectorId: number;
    idTag: string;
    meterStart: number;
    timestamp: string;
    reservationId?: number;
}

export interface IIdTagInfo {
    expireDate?: string;
    parentIdTag?: string;
    status: AuthorizationStatus;
}

export interface IStartTransactionConf {
    idTagInfo: IIdTagInfo;
    transactionId: number;
}

// MeterValues

export interface IMeterValueReq {
    connectorId: number;
    transactionId?: number;
    meterValue: IMeterValue[];
}

export interface ISampledValue {
    value: string;
    context?: ReadingContext;
    format?: ValueFormat;
    measurand?: Measurand;
    phase?: Phase;
    location?: Location;
    unit?: UnitOfMeasure;
}

export interface IMeterValue {
    timestamp: string;
    sampledValue: ISampledValue[];
}
export type MeterValueConf = null;

// StatusNotification

export interface IStatusNotificationReq {
    connectorId: number;
    errorCode: ChargePointErrorCode;
    info?: string;
    status: ChargePointStatus;
    timestamp?: string;
    vendorId?: string;
    vendorErrorCode?: string;
}

export type StatusNotificationConf = null;

// StopTransaction

export interface IStopTransactionReq {
    idTag?: string;
    meterStop: number;
    timestamp: string;
    transactionId: number;
    reason?: TransactionStopReason;
    transactionData?: IMeterValue[];
}

export interface IStopTransactionConf {
    idTagInfo: IIdTagInfo;
}

// Authorize
export interface IAuthorizeReq {
    idTag: string;
}

export interface IAuthorizeConf {
    idTagInfo: IIdTagInfo;
}

export type ChargePointConfMessagesPayload =
    IAuthorizeConf |
    IBootNotificationConf |
    IHeartbeatConf |
    IStartTransactionConf |
    MeterValueConf |
    StatusNotificationConf |
    IStopTransactionConf;
export type ChargePointReqMessagesPayload =
    IAuthorizeReq |
    IBootNotificationReq |
    HeartbeatReq |
    IStartTransactionReq |
    IMeterValueReq |
    IStatusNotificationReq |
    IStopTransactionReq;

