# Front-end part of ATM
Back-end part (https://github.com/karsv/atm)
Stack: Angular, HTMl, CSS, TypeScript, BootStrap;
Starter page: http://localhost:4200/login.

Here implemented basic logic of ATM: 
- refill ATM; _(ADMIN)_
- transfer money from one account to another account; _(USER)_
- put money on the account; _(USER)_
- check status of all ATMs, where shows available money on each ATM; _(USER)_
- withdraw money; _(USER)_
- check account; _(USER)_

In this project realised Basic authentication with two roles (ADMIN, USER). 

When this project starts it initialised with next parameters:
1. ADMIN
login: admin
password: 123
2. USER
login: user
password: 123
with two accounts:
 - id=1 (amount of money = 100000.11) 
 - id=2 (amount of money = 0)
 
3.Two ATMs
 - id=1
   NOTE 100 = 10
   NOTE 200 = 10
   NOTE 500 = 10
 - id=2
   NOTE 100 = 123
   NOTE 200 = 123
   NOTE 500 = 123
