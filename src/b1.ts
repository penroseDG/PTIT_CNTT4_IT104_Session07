class Employee {
    public name: string ;
    protected company: string ;
    private phone: string  ;   

    constructor( name : string , company : string , phone : string){
        this.name = name ; 
        this.company = company ; 
         this.phone = phone 
    }
    printfInfo() : string {
        return ` Tên nhân viên : ${this.name} , Công ty : ${this.company} , số ĐT : ${this.phone}  ` ;
    }
    setInFo(new_company : string , new_phone : string ){
        this.company = new_company ; 
        this.phone = new_phone ;
    }
}
class Manager extends Employee {
    teamSize : number ; 
    constructor( name : string , company : string , phone : string , teamSize : number ){
        super(name, company , phone );
        this.teamSize = teamSize ;
    }
    printfInfo (): string  {
     return `${super.printfInfo()}, Số lượng thành viên: ${this.teamSize}`;
    }
} 

const empl1 = new Manager ("Ducvip" , "DucvipCOP ", "0931511560 ", 5);
console.log(empl1.printfInfo());
