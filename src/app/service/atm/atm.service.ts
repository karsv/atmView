import {Injectable} from '@angular/core';
import {Atm} from '../../model/atm';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtmService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8081/atm';
  }

  public findAll(): Observable<Atm[]> {
    let psw = 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password'));
    const myHeader = new HttpHeaders().set('Authorization', psw);
    return this.http.get<Atm[]>(this.usersUrl + '/get-atms', {headers: myHeader});
  }

  public save(atm: Atm) {
    return this.http.post<Atm>(this.usersUrl + '/push-cash-to-atm', atm);
  }
}
