class BaseAccountX {
    public accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: string;

    constructor(accountNumber: string, initialBalance: number = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = "active";
    }

    deposit(amount: number): void {
        if (amount <= 0) {
            console.log("Số tiền nạp phải lớn hơn 0");
            return;
        }
        this.balance += amount;
        this.history.push(`Nạp: +${amount}, Số dư: ${this.balance}`);
        console.log(`Nạp thành công ${amount}, Số dư hiện tại: ${this.balance}`);
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Số tiền rút phải lớn hơn 0");
            return;
        }
        if (amount > this.balance) {
            console.log("Không đủ số dư để rút");
            return;
        }
        this.balance -= amount;
        this.history.push(`Rút: -${amount}, Số dư: ${this.balance}`);
        console.log(`Rút thành công ${amount}, Số dư hiện tại: ${this.balance}`);
    }

    showHistory(): void {
        console.log(`\nLịch sử giao dịch của tài khoản ${this.accountNumber}:`);
        if (this.history.length === 0) {
            console.log("Chưa có giao dịch nào.");
            return;
        }
        for (let i = 0; i < this.history.length; i++) {
            console.log(`${i + 1}. ${this.history[i]}`);
        }
    }
}

class SavingAccountX extends BaseAccountX {
    public interestRate: number;

    constructor(accountNumber: string, initialBalance: number, interestRate: number) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Số tiền rút phải lớn hơn 0");
            return;
        }
        if (amount > this.balance) {
            console.log("Không thể rút quá số dư hiện tại");
            return;
        }
        this.balance -= amount;
        if (this.balance < 0) this.balance = 0;
        this.history.push(`Rút: -${amount}, Số dư: ${this.balance}`);
        console.log(`Rút thành công ${amount}, Số dư hiện tại: ${this.balance}`);
    }

    applyMonthlyInterest(): void {
        if (this.balance <= 0) {
            console.log("Số dư = 0, không cộng lãi.");
            return;
        }
        const interest = this.balance * this.interestRate;
        this.balance += interest;
        this.history.push(`Cộng lãi: +${interest.toFixed(2)}, Số dư: ${this.balance.toFixed(2)}`);
        console.log(`Đã cộng lãi ${interest.toFixed(2)}, Số dư mới: ${this.balance.toFixed(2)}`);
    }
}

class CheckingAccountX extends BaseAccountX {
    private overdraftLimit: number;

    constructor(accountNumber: string, initialBalance: number, overdraftLimit: number) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount: number): void {
        if (amount <= 0) {
            console.log("Số tiền rút phải lớn hơn 0");
            return;
        }
        if (amount > this.balance + this.overdraftLimit) {
            console.log("Vượt quá hạn mức thấu chi!");
            return;
        }
        this.balance -= amount;
        this.history.push(`Rút: -${amount}, Số dư: ${this.balance}`);
        console.log(`Rút thành công ${amount}, Số dư hiện tại: ${this.balance}`);
    }
}
const mySavingAccX = new SavingAccountX("123456", 5000, 0.05);
mySavingAccX.deposit(2000);
mySavingAccX.withdraw(3000);
mySavingAccX.applyMonthlyInterest();
mySavingAccX.withdraw(4000);
mySavingAccX.applyMonthlyInterest();
mySavingAccX.showHistory();
const myCheckingAccX = new CheckingAccountX("987654", 2000, 1000);
myCheckingAccX.deposit(1500);
myCheckingAccX.withdraw(2500);
myCheckingAccX.withdraw(1000);
myCheckingAccX.withdraw(500);
myCheckingAccX.showHistory();
