import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AtmListComponent} from './components/atm-list/atm-list.component';
import {AtmService} from './service/atm/atm.service';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AtmFormComponent} from './components/atm-form/atm-form.component';
import {LoginComponent} from './components/login/login.component';
import {LogoutComponent} from './components/logout/logout.component';
import {WithdrawComponent} from './components/withdraw/withdraw.component';
import {AccountStatusComponent} from './components/account-status/account-status.component';
import {BasicAuthHtppInterceptorServiceService} from './service/basicAuthHttpInterceptor/basic-auth-htpp-interceptor-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AtmListComponent,
    AtmFormComponent,
    LoginComponent,
    LogoutComponent,
    WithdrawComponent,
    AccountStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AtmService, {
    provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorServiceService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
