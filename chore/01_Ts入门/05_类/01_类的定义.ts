class Person {
    name: string      
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    eat() {
        console.log(this.name + 'eat');
    }
}

const p = new Person('leo', 18)
console.log(p.name);
console.log(p.age);
p.eat()

export {}
