class Account {
    constructor(id, userName, password, isLogin, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    logOut() {
        if (this.isLogin === true) {
            this.isLogin = false;
            return `Đăng xuất thành công`;
        }
        else {
            return `Hiện tại không có tài khoản nào đăng nhập`;
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = true;
            return `Đăng nhập thành công`;
        }
        else if (this.status === "banned") {
            return `Tài khoản đã bị khóa`;
        }
        return `Trạng thái tài khoản không hợp lệ`;
    }
}
class adminAcc extends Account {
    constructor(id, userName, password, isLogin, role, status) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = true;
            return `Đăng nhập thành công`;
        }
        else if (this.status === "banned") {
            return `Tài khoản đã bị khóa`;
        }
        return `Trạng thái tài khoản không hợp lệ`;
    }
    // Ban user theo id
    banUserById(userId, users) {
        const targetUser = users.find(user => user.id === userId);
        if (targetUser) {
            targetUser.status = "banned";
            return `Người dùng ${targetUser.userName} đã bị cấm`;
        }
        else {
            return `Không tìm thấy user có id = ${userId}`;
        }
    }
}
let userList = [
    new userAcc(1, "ducvip1612", "ducvip16122004", true, "user1", "active"),
    new userAcc(2, "trangngu3004", "chiconbun1612", false, "user2", "active"),
    new userAcc(3, "Buncute", "bun@123", true, "user", "active")
];
let admin = new adminAcc(99, "admin", "123456", true, "admin", "active");
console.log(admin.banUserById(2, userList));
console.log(userList[1].login());
console.log(admin.banUserById(5, userList));
