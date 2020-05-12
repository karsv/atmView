import {AtmRequest} from './atm-request';
import {AccountRequest} from './account-request';

export class WithdrawMoneyRequest {
  atm: number;
  money: number;
  account: number;
}



