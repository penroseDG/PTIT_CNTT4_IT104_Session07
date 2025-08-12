//  abstract class Account{
//     public id: number;
//     public userName: string ; 
//     private password: string ; 
//     public isLogin: boolean ;
//     public role: string ;
    
//     constructor(id : number , userName : string , password : string , isLogin : boolean , role : string ) {
//             this.id = id ;
//             this.userName = userName;
//             this.password = password ; 
//             this.isLogin = isLogin ;
//             this.role = role ; 
//     }
//     abstract login() : string  ; 
//     logOut() {
//         if(this.isLogin = true ){
//             this.isLogin = false;
//             return ` Đăng xuất thành công `
//         }
//         else return ` Hiện tại không có tài khoản nào đăng nhập `; 
//     }
// }
// class userAcc extends Account {
//     status : string  ; 
//    constructor(id : number , userName : string , password : string , isLogin : boolean , role : string , status : string ) {
//         super(id, userName , password , isLogin , role );
//         this.status = status ; 
//    }
// login() : string {
//     if( this.status == "active"){
//         this.isLogin = true ; 
//         return ` Đăng nhập thành công `
//     }
//     else {
//             return ` Tài khoản đã bị khóa `
//         }
// }   
// }
// let acc1 = new userAcc(1, "ducvip1612" , "ducvip16122004" , true , "admin", "active");
// let acc2 = new userAcc(2, "trangngu3004" , "chiconbun1612" , false , "gaiiuxuanah", "banned");

// console.log(acc1.logOut());
// console.log(acc2.login());


