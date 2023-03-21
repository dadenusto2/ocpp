import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ConnectorsService, MockConnector } from '../../services/connectors/connectors.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ChargePointStatus } from '../../services/messaging/graphql';

@Component({
    selector: 'app-connector',
    templateUrl: './connector.component.html',
    styleUrls: ['./connector.component.scss']
})
export class ConnectorComponent implements OnInit, OnChanges {
    @Input() connector: MockConnector;
    connectorStatuses = Object.values(ChargePointStatus);

    formGroup: FormGroup = new FormGroup({
        increaseMeterValueBy: new FormControl(10),
        statusToInject: new FormControl(this.connectorStatuses[0]),
        autoStartTransaction: new FormControl(true),
        autoStopTransaction: new FormControl(true),
        autoSendMeterValues: new FormControl(true)
    });

    constructor(
        public connectorsService: ConnectorsService
    ) { }

    ngOnChanges(simpleChanges: SimpleChanges) {
        this.formGroup.controls.autoStartTransaction.setValue(simpleChanges.connector.currentValue.autoStartTransaction);
        this.formGroup.controls.autoStartTransaction.setValue(simpleChanges.connector.currentValue.autoStopTransaction);
    }

    ngOnInit(): void {
        this.formGroup.controls.autoStartTransaction.valueChanges.subscribe((v) => this.connector.autoStartTransaction = v);
        this.formGroup.controls.autoStopTransaction.valueChanges.subscribe((v) => this.connector.autoStopTransaction = v);
        this.formGroup.controls.autoSendMeterValues.valueChanges.subscribe((v) => this.connector.autoSendMeterValues = v);
    }

    increaseMeterValue(connector: MockConnector) {
        connector.meterValue += this.formGroup.controls.increaseMeterValueBy.value;
    }

    sendStatus() {
        this.connectorsService.sendStatusNotification({
            connectorId: this.connector.connectorId,
            status: this.formGroup.controls.statusToInject.value
        }).subscribe();
    }

    sendMeterValue() {
        this.connectorsService.sendMeterValues({
            connectorId: this.connector.connectorId
        }).subscribe();
    }

    startTransaction() {
        this.connectorsService.startTransaction({
            idTag: this.connector.idTag,
            transactionId: this.connector.transactionId,
            connectorId: this.connector.connectorId
        });
    }

    stopTransaction() {
        this.connectorsService.stopTransaction({ transactionId: this.connector.transactionId });
    }


    myFunction(formId: number) {
        let x = document.getElementById(`form${formId}`);
        let button = document.getElementById(`button${formId}`);
        if (x.style.display === "none") {
            x.style.display = "block";
            button.classList.add("show")
        } else {
            x.style.display = "none";
            button.classList.remove("show")
        }
    }
}
