class Person {
    private _name: string
    static age: number = 18

    constructor(name: string) {
        this._name = name
    }

    //set
    set name(newName) {
        this._name = newName
    }

    //get
    get name() {
        return this._name
    }
    
}

const p = new Person('leo');
p.name = 'dicaprio'
console.log(p.name);
console.log(Person.age);




export {}