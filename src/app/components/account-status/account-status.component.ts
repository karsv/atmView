import {Component, OnInit} from '@angular/core';
import {AccountResponse} from '../../model/accountResponse/account-response';
import {AccountServiceService} from '../../service/account/account-service.service';
import {AccountRequest} from '../../model/accountRequest/account-request';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-account-status',
  templateUrl: './account-status.component.html',
  styleUrls: ['./account-status.component.css']
})
export class AccountStatusComponent implements OnInit {
  account: AccountResponse;

  constructor(private accountService: AccountServiceService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    let accountRequest = new AccountRequest();
    accountRequest.id = +sessionStorage.getItem('accountId');
    sessionStorage.removeItem('accountId');
    this.accountService.getAccount(accountRequest).subscribe(result => {
        this.account = new AccountResponse();
        this.account.money = result.money;
        this.account.cardNumber = result.cardNumber;
      },
      err => {
        console.log(err.message);
      });
  }
}
