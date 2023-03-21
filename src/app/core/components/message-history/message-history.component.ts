import {Component, OnInit} from '@angular/core';
import {ConnectionService} from '../../services/connection/connection.service';
import {zip} from 'rxjs';
import {subscribeOn} from 'rxjs/operators';

@Component({
    selector: 'app-message-history',
    templateUrl: './message-history.component.html',
    styleUrls: ['./message-history.component.scss']
})
export class MessageHistoryComponent implements OnInit {
    messageHistory: {source: 'chargePoint' | 'centralSystem', entry: {index: number, message: any} }[] = [];

    constructor(
        private readonly _connectionService: ConnectionService
    ) {}

    ngOnInit(): void {
        this._connectionService.message$.subscribe((m) => {
            this.messageHistory = this.messageHistory.concat({
                source: 'centralSystem',
                entry: m
            });
        });

        this._connectionService.sentMessage$.subscribe((m) => {
            this.messageHistory = this.messageHistory.concat({
                source: 'chargePoint',
                entry: m
            });
        });
    }

    clear() {
        this.messageHistory = [];
    }
}
