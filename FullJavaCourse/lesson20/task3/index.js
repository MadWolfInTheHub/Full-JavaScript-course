class Wallet {
    _balance = 0;

    getBalance() {
        return this._balance;
    };

    deposit(amount) {
        return this._balance += amount;
    }

    withdraw(amount) {
        if (amount > this._balance) {
            console.log('No enough funds');
            return;
        }
        
        return this._balance -= amount;
    }
}

const wallet1 = new Wallet();
console.log(wallet1);
wallet1.deposit(90);
console.log(wallet1);
wallet1.withdraw(78);
console.log(wallet1);
wallet1.withdraw(49);
console.log(wallet1);
