class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    showSpeed() {
        return ` tốc độ hiện tại là ${this.speed}`;
    }
    slowDown() {
        if (this.speed <= 0) {
            return ` không thể giảm tốc độ `;
        }
        this.speed = Math.max(0, this.speed - 20);
        return ` giảm tốc độ thành công , tốc độ hiện tại là ${this.speed}`;
    }
    speedUp() {
        if (this.speed >= 150) {
            return ` tốc độ tối đa không thể tăng thêm `;
        }
        this.speed += 40;
        return ` tăng tốc thành công , tốc độ hiện tại là ${this.speed}`;
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, id, speed);
        this.gear = gear;
    }
    setGear(new_gear) {
        this.gear = new_gear;
    }
    printfInfo() {
        return ` tên xe là ${this.name} , số xe : ${this.id} , tốc độ ${this.speed}`;
    }
}
let Tư_mã_ý = new Bicycle("Lữ bố", 100, 520, 300);
console.log(Tư_mã_ý.printfInfo());
console.log(Tư_mã_ý.showSpeed());
console.log(Tư_mã_ý.speedUp());
console.log(Tư_mã_ý.slowDown());
