export const payloads = {
    call: {
        bootNotification: {
            chargePointModel: 'emulatorV1',
            chargePointVendor: 'emulatorVendor',
            /**
             * This contains a value that identifies the serial number of
             * the Charge Box inside the Charge Point. Deprecated, will be
             * removed in future version
             *
             * @deprecated
             */
            chargeBoxSerialNumber: null,
            chargePointSerialNumber: null,
            firmwareVersion: null,
            iccid: null,
            imsi: null,
            meterSerialNumber: null,
            meterType: null
        },
        stopTransaction: {
            meterStop: 0,
            transactionId: null,
            idTag: null,
            timestamp: null
        }
    }
};
