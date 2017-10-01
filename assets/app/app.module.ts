import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { MessageModule } from './messages/message.module'
import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { AuthService } from "./auth/auth.service";
import { AuthGuardService } from "./auth/auth-guard.service";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";

import { routing } from "./app.routing"

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [
      BrowserModule,
      routing,
      HttpModule,
      MessageModule
    ],
    providers: [AuthService, AuthGuardService, ErrorService],
    bootstrap: [AppComponent]
})
export class AppModule {

}
