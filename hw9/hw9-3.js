class BankAccount {
    constructor(accountNumber, accountHolder, currentBalance) {
        this.accountNumber = accountNumber
        this.accountHolder = accountHolder
        this.balance = currentBalance
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount
            console.log(`You have deposited ${amount} dollars. The new balance on your accouunt is: ${this.balance} dollars.`)
        } else {
            console.error("Deposited amount must be a positive amount.")
        }
    }

    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount
                console.log(`You have withdrew ${amount} dollars. The new balance on your account is: $${this.balance} dollars`)
            } else {
                console.error("Withdrawal amount exceeds your current balance.")
            }
        } else {
            console.error("Withdrawal amount must be a positive amount.")
        }
    }

    getBalance() {
        return this.balance
    }
}

const myAccount1 = new BankAccount("237483", "Marija", 600)

myAccount1.deposit(200)
myAccount1.withdraw(300)
console.log(`Marija's current account balance is ${myAccount1.getBalance()} dollars.`)