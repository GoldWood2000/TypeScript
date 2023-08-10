
abstract class Animal {
    public name;
    public constructor(name: string) {
      this.name = name;
    }
    public abstract sayHi(): void;
}

class Cat extends Animal {
    sayHi() {
        console.log(this.name + 'Cat');
    }
}


class Dog extends Animal {
    sayHi() {
        console.log(this.name + 'Dog');
    }
}

const s = new Cat('tom');
const d = new Dog('jeray');
s.sayHi();
d.sayHi();

export {}
