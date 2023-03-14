class BankAccount {
    private balance;//private specifier
    //setter to set private member
    set setBalance(amount: number) {
        this.balance = amount;
    }

    //getter to access the private member 
    get getBalance(): number {
        return this.balance;
    }

    //using setter and getter to change the value of 
    //private member.
    withdrawAmount(amount: number): number {
        let newBalance = this.getBalance - amount;
        this.setBalance = newBalance;
        return this.getBalance;
    }
}

let account = new BankAccount();
account.setBalance = 5000;
console.log(account.getBalance);
console.log(account.withdrawAmount(1000));