export enum OcppClientActions {
    bootNotification = 'BootNotification',
    heartbeat = 'Heartbeat',
    startTransaction = 'StartTransaction',
    stopTransaction = 'StopTransaction',
    meterValues = 'MeterValues',
    statusNotification = 'StatusNotification',
    authorize = 'Authorize'
}

export enum OcppServerActions {
    remoteStartTransaction = 'RemoteStartTransaction',
    remoteStopTransaction = 'RemoteStopTransaction',
    changeConfiguration = 'ChangeConfiguration',
    getConfiguration = 'GetConfiguration'
}

export enum OcppMessageTypes {
    CALL = 2,
    CALLRESULT = 3,
    CALLERROR = 4
}
