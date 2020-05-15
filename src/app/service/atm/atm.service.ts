import {Injectable} from '@angular/core';
import {Atm} from '../../model/atm/atm';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WithdrawMoneyRequest} from '../../model/wihtdrawMoneyRequest/withdraw-money-request';

@Injectable({
  providedIn: 'root'
})
export class AtmService {

  private usersUrl: string;
  public error: any;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8081/atm';
  }

  public getAtms(): Observable<Atm[]> {
    return this.http.get<Atm[]>(this.usersUrl + '/');
  }

  public putCashToAtm(atm: Atm) {
    return this.http.post(this.usersUrl + '/push-cash', atm).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err.message);
      });
  }

  public withdrawMoney(withdrawMoneyRequest: WithdrawMoneyRequest) {
    sessionStorage.setItem('accountId', withdrawMoneyRequest.accountId.toString());
    return this.http.post(this.usersUrl + '/withdraw-money', withdrawMoneyRequest);
  }
}
