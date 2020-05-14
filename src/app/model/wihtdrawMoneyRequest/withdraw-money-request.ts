import {AtmRequest} from '../atmRequest/atm-request';
import {AccountRequest} from '../accountRequest/account-request';

export class WithdrawMoneyRequest {
  atm: number;
  money: number;
  account: number;
}
