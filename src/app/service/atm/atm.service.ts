import {Injectable} from '@angular/core';
import {Atm} from '../../model/atm';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WithdrawMoneyRequest} from '../../model/withdraw-money-request';
import {DepositMoneyRequest} from '../../model/deposit-money-request';
import {TransferMoneyRequest} from '../../model/transfer-money-request';

@Injectable({
  providedIn: 'root'
})
export class AtmService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8081/atm';
  }

  public getAtms(): Observable<Atm[]> {
    let psw = 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password'));
    const myHeader = new HttpHeaders().set('Authorization', psw);
    return this.http.get<Atm[]>(this.usersUrl + '/get-atms', {headers: myHeader});
  }

  public putCashToAtm(atm: Atm) {
    let psw = 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password'));
    const myHeader = new HttpHeaders().set('Authorization', psw);
    return this.http.post(this.usersUrl + '/push-cash-to-atm', atm, {headers: myHeader}).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err.message);
      });
  }

  // TODO: Implement
  public withdrawMoney(withdrawMoneyRequest: WithdrawMoneyRequest) {

  }

  // TODO: Implement
  public depositMoney(depositMoneyRequest: DepositMoneyRequest) {

  }

  // TODO: Implement
  public transferMoney(transferMoneyRequest: TransferMoneyRequest){

  }
}
