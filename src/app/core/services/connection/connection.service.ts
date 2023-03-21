import {EventEmitter, Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ConnectionService {
    public readonly connected$: EventEmitter<void> = new EventEmitter<void>();
    /**
     * Event is emitted when a message was received
     */
    public readonly message$: EventEmitter<any> = new EventEmitter<any>();
    /**
     * Event is emitted when a message was sent
     */
    public readonly sentMessage$: EventEmitter<any> = new EventEmitter<any>();
    private _messageOrderIndex = 0;

    isConnected: boolean = false;
    private _connection: WebSocket;

    constructor() {
    }

    connect({address}: {address: string}) {
        this._connection = new WebSocket(address, ['ocpp1.6']);

        this._connection.onopen = () => {
            this.isConnected = true;
            this.connected$.emit();
        };

        this._connection.onmessage = (event) => {
            this.message$.emit({index: this._getMessageOrderIndex(), message: JSON.parse(event.data)});
        };

        this._connection.onclose = () => {
            this.isConnected = false;
        };
    }

    disconnect() {
        this._connection.close();
    }

    /**
     * Low level method
     *
     * Shouldn't be used directly
     * use MessagingService.sendCall
     *     MessagingService.sendConf
     *     instead
     * @param m
     */
    sendMessage(m: any) {
        return new Observable<boolean>((o) => {
            this.sentMessage$.emit({index: this._getMessageOrderIndex(), message: m});
            this._connection.send(JSON.stringify(m));
            o.next(true);
            o.complete();
        });
    }

    /**
     * In some cases after emitting message$ sentMessage$ maybe emitted and some subscribes will received
     * sentMessage$ first, if order is important they can use this index
     * @private
     */
    private _getMessageOrderIndex() {
        const newIndex = ++this._messageOrderIndex;

        if (newIndex > 1000) {
            this._messageOrderIndex = 0;
        }

        return this._messageOrderIndex;
    }
}
