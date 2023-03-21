import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ConnectionService} from '../../services/connection/connection.service';

@Component({
    selector: 'app-connection',
    templateUrl: './connection.component.html',
    styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
    readonly DEFAULT_SERVER = 'ws://localhost:8000/ocpp/fake1';
    readonly LOCAL_STORAGE_LAST_USED_SERVER_KEY = 'emulator-last-used-server';
    formGroup: FormGroup = new FormGroup({
        address: new FormControl(this.DEFAULT_SERVER),
        idTag: new FormControl()
    });

    defaultServers = [
        this.DEFAULT_SERVER,
        'wss://dev.ocpp.charge.nesk.ru/ocpp/fake1',
    ];

    constructor(
        public connectionService: ConnectionService
    ) {}

    ngOnInit() {
        const storedLastUsedServer = localStorage.getItem(this.LOCAL_STORAGE_LAST_USED_SERVER_KEY);

        if (storedLastUsedServer) {
            this.formGroup.get('address').setValue(storedLastUsedServer);
        }

        this.formGroup.get('address').valueChanges.subscribe((value) => {
            if (value) {
                localStorage.setItem(this.LOCAL_STORAGE_LAST_USED_SERVER_KEY, value);
            }
        });
    }

    onDefaultServerClick(value: string) {
        this.formGroup.controls.address.setValue(value);
    }

    onSubmit() {
        if (this.connectionService.isConnected) {
            this.connectionService.disconnect();
        } else {
            this.connectionService.connect({address: this.formGroup.controls.address.value});
        }
    }
}
