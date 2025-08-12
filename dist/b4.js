class Person {
    constructor(name) {
        this.name = name;
    }
}
class Students extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayfInfo() {
        return ` Tên học sinh ${this.name} , id : ${this.id} `;
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayfInfo() {
        return ` Tên giáo viên ${this.name} , môn học phụ trách  : ${this.subject} `;
    }
}
let hs = new Students("Đức vip promax ", 16);
console.log(hs.displayfInfo());
let gv = new Teacher("Đức đấng đại đế ", "Toán");
console.log(gv.displayfInfo());
