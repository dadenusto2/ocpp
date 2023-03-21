import {Component, OnInit} from '@angular/core';
import {MessagingService} from './core/services/messaging/messaging.service';
import {ConnectorsService} from './core/services/connectors/connectors.service';
import {ConfigurationService} from './core/services/configuration/configuration.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'ocpp-chargepoint-emulator';

    constructor(
        private readonly _messagingService: MessagingService,
        public readonly connectorsService: ConnectorsService,
        public readonly configuration: ConfigurationService,
    ) {
    }
    ngOnInit(): void {
        console.log(this.connectorsService)
    }


}
