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

export enum AuthorizationStatus {
    Accepted ='Accepted',
    Blocked = 'Blocked',
    Expired = 'Expired',
    Invalid = 'Invalid',
    ConcurrentTx = 'ConcurrentTx'
}

export enum RemoteStartStopStatus {
    Accepted = 'Accepted',
    Rejected = 'Rejected'
}

// comments are from the OCPP specification
export enum OcppMessageErrorCodes {
    /**
     * Requested Action is not known by receiver
     */
    NotImplemented = 'NotImplemented',
    /**
     * Requested Action is recognized but not supported
     * by the receiver
     */
    NotSupported = 'NotSupported',
    /**
     * An internal error occurred and the receiver was
     * not able to process the requested Action
     * successfully
     */
    InternalError = 'InternalError',
    /**
     * Payload for Action is incomplete
     */
    ProtocolError = 'ProtocolError',
    /**
     * During the processing of Action a security issue
     * occurred preventing receiver from completing the
     * Action successfully
     */
    SecurityError = 'SecurityError',
    /**
     * Payload for Action is syntactically incorrect or not
     * conform the PDU structure for Action
     */
    FormationViolation = 'FormationViolation',
    /**
     * Payload is syntactically correct but at least one
     * field contains an invalid value
     */
    PropertyConstraintViolation = 'PropertyConstraintViolation',
    /**
     * Payload for Action is syntactically correct but at
     * least one of the fields violates occurence
     * constraints
     */
    OccurenceConstraintViolation = 'OccurenceConstraintViolation',
    /**
     * Payload for Action is syntactically correct but at
     * least one of the fields violates data type
     * constraints (e.g. “somestring”: 12)
     */
    TypeConstraintViolation = 'TypeConstraintViolation',
    /**
     * Any other error not covered by the previous ones
     */
    GenericError = 'GenericError'
}

export enum RegistrationStatus {
    Accepted = 'Accepted',
    Pending = 'Pending',
    Rejected = 'Rejected'
}

export enum ReadingContext {
    // Value taken at start of interruption
    interruptionBegin = 'Interruption.Begin',
    // Value taken when resuming after interruption
    interruptionEnd = 'Interruption.End',
    // Value for any other situations
    other = 'Other',
    // Value taken at clock aligned interval
    sampleClock = 'Sample.Clock',
    // Value taken as periodic sample relative to start time of transaction.
    samplePeriodic = 'Sample.Periodic',
    // Value taken at start of transaction
    transactionBegin ='Transaction.Begin',
    // Value taken at end of transaction
    transactionEnd = 'Transaction.End',
    // Value taken in response to a TriggerMessage.req
    trigger = 'Trigger'
}

export enum Measurand {
    /**
     * Instantaneous current flow from EV
     */
    CurrentExport = 'Current.Export',
    /**
     * Instantaneous current flow to EV
     */
    CurrentImport = 'Current.Import',
    /**
     * Maximum current offered to EV
     */
    CurrentOffered = 'Current.Offered',
    /**
     * Numerical value read from the "active electrical energy"
     * (Wh or kWh) register of the (most authoritative)
     * electrical meter measuring energy exported (to the grid).
     */
    EnergyActiveExportRegister = 'Energy.Active.Export.Register',
    /**
     * Numerical value read from the "active electrical energy"
     * (Wh or kWh) register of the (most authoritative)
     * electrical meter measuring energy imported (from the grid supply).
     */
    EnergyActiveImportRegister = 'Energy.Active.Import.Register',
    /**
     * Numerical value read from the "reactive electrical energy"
     * (VARh or kVARh) register of the (most
     * authoritative) electrical meter measuring energy exported (to the grid).
     */
    EnergyReactiveExportRegister = 'Energy.Reactive.Export.Register',
    /**
     * Numerical value read from the "reactive electrical energy"
     * (VARh or kVARh) register of the (most
     * authoritative) electrical meter measuring energy imported (from the grid supply).
     */
    EnergyReactiveImportRegister = 'Energy.Reactive.Import.Register',
    /**
     * Absolute amount of "active electrical energy" (Wh or kWh)
     * exported (to the grid) during an associated time
     * "interval", specified by a Metervalues ReadingContext,
     * and applicable interval duration configuration values
     * (in seconds) for "ClockAlignedDataInterval" and "MeterValueSampleInterval".
     */
    EnergyActiveExportInterval = 'gy.Active.Export.Interval',
    /**
     * Absolute amount of "active electrical energy"
     * (Wh or kWh) imported (from the grid supply) during an
     * associated time "interval", specified by a Metervalues ReadingContext,
     * and applicable interval duration
     * configuration values (in seconds) for "ClockAlignedDataInterval"
     * and "MeterValueSampleInterval".
     */
    EnergyActiveImportInterval = 'Energy.Active.Import.Interval',
    /**
     * Absolute amount of "reactive electrical energy" (VARh or kVARh)
     * exported (to the grid) during an associated
     * time "interval", specified by a Metervalues ReadingContext,
     * and applicable interval duration configuration
     * values (in seconds) for "ClockAlignedDataInterval" and "MeterValueSampleInterval".
     */
    EnergyReactiveExportInterval = 'Energy.Reactive.Export.Interval',
    /**
     * Absolute amount of "reactive electrical energy" (VARh or kVARh)
     * imported (from the grid supply) during an
     * associated time "interval", specified by a Metervalues ReadingContext,
     * and applicable interval duration
     * configuration values (in seconds) for "ClockAlignedDataInterval"
     * and "MeterValueSampleInterval".
     */
    EnergyReactiveImportInterval = 'Energy.Reactive.Import.Interval',
    /**
     * Instantaneous reading of powerline frequency NOTE: OCPP 16 does not have a UnitOfMeasure for
     * frequency, the UnitOfMeasure for any SampledValue with measurand: Frequency is Hertz.
     * Power.Active.Export Instantaneous active power exported by EV. (W or kW)
     */
    Frequency = 'Frequency',
    /**
     * Instantaneous active power imported by EV (W or kW)
     */
    PowerActiveImport = 'Power.Active.Import',
    /**
     * Instantaneous power factor of total energy flow
     */
    PowerFactor = 'Power.Factor',
    /**
     * Maximum power offered to EV
     */
    PowerOffered = 'Power.Offered',
    /**
     * Instantaneous reactive power exported by EV (var or kvar)
     */
    PowerReactiveExport = 'Power.Reactive.Export',
    /**
     * Instantaneous reactive power imported by EV (var or kvar)
     */
    PowerReactiveImport = 'Power.Reactive.Import',
    /**
     * Fan speed in RPM
     */
    Rpm = 'RPM',
    /**
     * State of charge of charging vehicle in percentage
     */
    Soc = 'SoC',
    /**
     * Temperature reading inside Charge Point
     */
    Temperature = 'Temperature',
    /**
     * Instantaneous AC RMS supply voltage
     */
    Voltage = 'Voltage'
}

export enum Phase {
    // Measured on L1
    L1 = 'L1',
    // Measured on L2
    L2 = 'L2',
    // Measured on L3
    L3 = 'L3',
    // Measured on Neutral
    N = 'N',
    // Measured on L1 with respect to Neutral conductor
    L1N = 'L1-N',
    // Measured on L2 with respect to Neutral conductor
    L2N = 'L2-N',
    // Measured on L3 with respect to Neutral conductor
    L3N = 'L3-N',
    // Measured between L1 and L2
    L1L2 = 'L1-L2',
    // Measured between L2 and L3
    L2L3 = 'L2-L3',
    // Measured between L3 and L1
    L3L1 = 'L3-L1'
}

export enum ConfigurationStatus {
    // Configuration key is supported and setting has been changed.
    Accepted = 'Accepted',
    // Configuration key is supported, but setting could not be changed.
    Rejected = 'Rejected',
    // Configuration key is supported and setting has been changed,
    // but change will be available after reboot (Charge Point will not
    // reboot itself)
    RebootRequired = 'RebootRequired',
    //  Configuration key is not supported.
    NotSupported = 'NotSupported',
}
