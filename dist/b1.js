class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printfInfo() {
        return ` Tên nhân viên : ${this.name} , Công ty : ${this.company} , số ĐT : ${this.phone}  `;
    }
    setInFo(new_company, new_phone) {
        this.company = new_company;
        this.phone = new_phone;
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printfInfo() {
        return `${super.printfInfo()}, Số lượng thành viên: ${this.teamSize}`;
    }
}
const empl1 = new Manager("Ducvip", "DucvipCOP ", "0931511560 ", 5);
console.log(empl1.printfInfo());
