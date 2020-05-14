import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AtmListComponent} from './components/atm-list/atm-list.component';
import {AtmFormComponent} from './components/atm-form/atm-form.component';
import {LoginComponent} from './components/login/login.component';
import {LogoutComponent} from './components/logout/logout.component';
import {AuthGuardService} from './service/authGuard/auth-guard.service';
import {WithdrawComponent} from './components/withdraw/withdraw.component';

const routes: Routes = [
  {path: 'atms', component: AtmListComponent, canActivate: [AuthGuardService]},
  {path: 'put-cash-to-atm', component: AtmFormComponent, canActivate: [AuthGuardService]},
  {path: 'withdraw-money', component: WithdrawComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
