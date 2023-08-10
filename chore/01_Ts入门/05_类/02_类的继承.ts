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

class Student extends Person{
    sno: number

    constructor(name: string, age: number, sno: number) {
        super(name, age)
        this.sno = sno
    }

    eat() {
        console.log('Student eat');
        super.eat()
    }
}

const s = new Student('leo', 18, 111)
console.log(s.name);
console.log(s.age);
console.log(s.sno);
s.eat()



export {}