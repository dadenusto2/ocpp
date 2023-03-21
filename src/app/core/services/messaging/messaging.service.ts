import {Injectable} from '@angular/core';
import {ConnectionService} from '../connection/connection.service';
import {OcppClientActions, OcppMessageTypes} from './types';
import {payloads} from './payloads';
import { filter, switchMap, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MessagingService {
    private _lastEmulatorMessageId = 0;
    constructor(
        private _connectionService: ConnectionService
    ) {
        this._connectionService.connected$.subscribe(() => {
            this.sendCallMessage(OcppClientActions.bootNotification, payloads.call.bootNotification).subscribe();
        });
    }

    /**
     * Send CALL message to Central System with provided action and payload
     */
    sendCallMessage(action: OcppClientActions, payload) {
        const messageId = 'emulator' + this._lastEmulatorMessageId++;
        return this._connectionService.sendMessage([
            OcppMessageTypes.CALL,
            messageId,
            action,
            payload
        ])
        .pipe(
            switchMap(() => {
                return this._connectionService.message$;
            }),
            filter(({message: m}) => {
                if (m[0] === OcppMessageTypes.CALLRESULT && m[1] === messageId) {
                    return m;
                }
            }),
            take(1)
        );
    }

    sendConfMessage(messageId, payload) {
        return this._connectionService.sendMessage([
            OcppMessageTypes.CALLRESULT,
            messageId,
            payload
        ]);
    }
}
