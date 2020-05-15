import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AccountRequest} from '../../model/accountRequest/account-request';
import {AccountResponse} from '../../model/accountResponse/account-response';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8081/account';
  }

  public getAccount(account: AccountRequest) {
    return this.http.post<AccountResponse>(this.usersUrl + '/account-status', account);
  }
}
