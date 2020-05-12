import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserRequest} from '../../model/user-request';
import {User} from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {
  }

  authenticate(user: UserRequest) {
    const headers = {'content-type': 'application/json'};
    return this.httpClient.post<User>('http://localhost:8081/login', user, {'headers': headers}).subscribe(
      userData => {
        sessionStorage.setItem('username', userData.name);
        sessionStorage.setItem('password', userData.password);
        sessionStorage.setItem('role', userData.role);
      }
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  userRole() {
    return sessionStorage.getItem('role');
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('role');
  }
}
