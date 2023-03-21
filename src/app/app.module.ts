import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { ConnectionComponent } from './core/components/connection/connection.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MessageHistoryComponent } from './core/components/message-history/message-history.component';
import {SortByPipe} from './core/pipes/sort-by/sort-by.pipe';
import { ConnectorComponent } from './core/components/connector/connector.component';

@NgModule({
    declarations: [
        AppComponent,
        ConnectionComponent,
        MessageHistoryComponent,
        SortByPipe,
        ConnectorComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
