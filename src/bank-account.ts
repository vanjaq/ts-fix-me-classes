class BankAccount {
    balance: number
    initialAmount: string

    constructor(initialAmount: string, balance: number) {
        this.balance = balance
        this.initialAmount = initialAmount
    }

    deposit(amount: number): number {
        this.balance = this.balance + amount
        return this.balance
    }
}

const myAccount = new BankAccount('sum',500)
console.log(myAccount.deposit(100)) // After fixing: will print 600
