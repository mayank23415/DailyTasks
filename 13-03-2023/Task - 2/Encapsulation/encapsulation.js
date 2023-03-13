var BankAccount = /** @class */ (function () {
    function BankAccount() {
    }
    Object.defineProperty(BankAccount.prototype, "setBalance", {
        set: function (amount) {
            this.balance = amount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BankAccount.prototype, "getBalance", {
        get: function () {
            return this.balance;
        },
        enumerable: false,
        configurable: true
    });
    BankAccount.prototype.withdrawAmount = function (amount) {
        var newBalance = this.getBalance - amount;
        this.setBalance = newBalance;
        return this.getBalance;
    };
    return BankAccount;
}());
var account = new BankAccount();
account.setBalance = 5000;
console.log(account.getBalance);
console.log(account.withdrawAmount(1000));
