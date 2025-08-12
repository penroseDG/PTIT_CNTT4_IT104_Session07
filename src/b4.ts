abstract class Person {
    public name : string ; 
    constructor(name : string ) {
            this.name = name ; 
    }
    abstract displayfInfo() : string  ; 
}
class Students extends Person {
    id : number ; 
    constructor(name : string , id : number){
        super(name); 
        this.id = id ;
    }
    displayfInfo(): string {
     return ` Tên học sinh ${this.name } , id : ${this.id} `;
    }
}
class Teacher extends Person {
    subject : string ;
    constructor(name : string , subject : string ) {
            super(name); 
            this.subject = subject ; 
    }
    displayfInfo():  string  {
     return ` Tên giáo viên ${this.name } , môn học phụ trách  : ${this.subject} `;
    }
}
let hs = new Students("Đức vip promax ", 16);
console.log(hs.displayfInfo());
let gv = new Teacher("Đức đấng đại đế ", "Toán");
console.log(gv.displayfInfo());
