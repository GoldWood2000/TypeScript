interface Person {
    run: () => void
}

interface Student {
    stu: () => void
}

interface Human extends Person, Student {
    eat: () => void
}

abstract class action {
    public name: string
    private age: number
    abstract a(): void
}
//类不能继承接口，只能实现接口
class PeoPle extends action implements Person, Student {
    a() {

    }

    run() {
        console.log("run");

    }
    stu() {
        console.log('stu');

    }
}
PeoPle.name



const bar: Human = {
    eat() {
        console.log('eat');
    },
    run() {
        console.log('run');
    },
    stu() {
        console.log('stu');
    }
}
function foo(val: Human) {
    val.eat()
    val.run()
    val.stu()
}

foo(bar);

export { }



