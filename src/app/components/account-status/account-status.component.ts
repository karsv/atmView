import {Component, OnInit} from '@angular/core';
import {AccountResponse} from '../../model/accountResponse/account-response';
import {AccountService} from '../../service/account/account.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-account-status',
  templateUrl: './account-status.component.html',
  styleUrls: ['./account-status.component.css']
})
export class AccountStatusComponent implements OnInit {
  account: AccountResponse;

  constructor(private accountService: AccountService, private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.accountService.getAccount().subscribe(result => {
        this.account = new AccountResponse();
        this.account.money = result.money;
        this.account.cardNumber = result.cardNumber;
      },
      err => {
        console.log(err.message);
      });
  }
}
