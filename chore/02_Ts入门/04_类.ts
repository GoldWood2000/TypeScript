class Person {
    protected name: string
    constructor(name: string) {
        this.name = name
    }

}


class Student extends Person{
    constructor() {
        super('leo');
    }
    getName() {
        return this.name
    }
}

const s = new Student()
console.log(s.getName());



// function foo(x: string | number | boolean) {
//     const isString = typeof x === 'string'
//     const isNumber = typeof x === 'number'
//     const isStringOrNumber = isString || isNumber

//     console.log(isString);
    

//     if(isStringOrNumber) {
//         console.log(x);
//     } else {
//         console.log(x);
        
//     }
// }

// foo('leo')
// foo(1)



export {}