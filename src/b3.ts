abstract class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
    abstract makeNoise(): void;

    printName(): void {
        console.log(`Tên động vật: ${this.name}`);
    }
}
class Cat extends Animal {
    makeNoise(): void {
        console.log("meo meo");
    }
}

class Dog extends Animal {
    makeNoise(): void {
        console.log("gâu gâu");
    }
}
const animals: Animal[] = [
    new Cat("Mèo Mun"),
    new Dog("Cún Vàng")
];

for (let animal of animals) {
    animal.printName();   
    animal.makeNoise();  
}
