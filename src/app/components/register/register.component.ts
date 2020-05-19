import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication/authentication.service';
import {UserRequest} from '../../model/userRequest/user-request';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userRequest: UserRequest;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private loginservice: AuthenticationService) {
    this.userRequest = new UserRequest();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginservice.register(this.userRequest);
  }
}
