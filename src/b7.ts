class $Account {
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
        console.log(`\n Lịch sử giao dịch của tài khoản ${this.accountNumber}:`);
        if (this.history.length === 0) {
            console.log("Chưa có giao dịch nào.");
            return;
        }
        for (let i = 0; i < this.history.length; i++) {
            console.log(`${i + 1}. ${this.history[i]}`);
        }
    }
}

class SavingAccount extends $Account {
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
const mySavingAcc = new SavingAccount("123456", 5000, 0.05);

mySavingAcc.deposit(2000);   
mySavingAcc.withdraw(3000);  
mySavingAcc.applyMonthlyInterest(); 
mySavingAcc.withdraw(4000);  
mySavingAcc.applyMonthlyInterest(); 

mySavingAcc.showHistory();
