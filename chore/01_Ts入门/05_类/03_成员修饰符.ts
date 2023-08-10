class Person {
    private name: string      
    private age: number
    protected action: string        //在内部和子类中可以访问
    readonly hobby: {               //readonly是对象类型时，内部属性可以修改
        play: string
    }

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    public eat() {
        console.log(this.name + 'eat');
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }
}

class Student extends Person {
    getAction() {
        return this.action
    }
}


export {}