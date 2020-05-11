import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../service/authentication/authentication.service';
import {UserRequest} from '../model/user-request';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userRequest: UserRequest;
  user: User;
  invalidLogin = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private loginservice: AuthenticationService, private httpClient: HttpClient) {
    this.userRequest = new UserRequest();
  }

  ngOnInit(): void {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.userRequest)) {
      this.router.navigate(['']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
