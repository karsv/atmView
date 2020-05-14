import { Component, OnInit } from '@angular/core';
import {AccountResponse} from '../../model/accountResponse/account-response';
import {AccountServiceService} from '../../service/account/account-service.service';

@Component({
  selector: 'app-account-status',
  templateUrl: './account-status.component.html',
  styleUrls: ['./account-status.component.css']
})
export class AccountStatusComponent implements OnInit {
  account: AccountResponse;

  constructor(private accountService: AccountServiceService) { }

  ngOnInit(): void {
  }

}
