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
    let username = 'admin';
    let password = '123';
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.get<Atm[]>(this.usersUrl + '/get-atms', {headers});
  }

  public save(atm: Atm) {
    return this.http.post<Atm>(this.usersUrl + '/push-cash-to-atm', atm);
  }
}
