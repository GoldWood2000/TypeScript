interface Person {
    name: string,
    age: number,
    hobby: string
}

interface type {
    name: string,
    age: number,
    hobby: string,
    address: string
}

const info: type = {
    name: 'leo',
    age: 18,
    hobby: '演戏',
    address: 'nanj'
}

//freshness 擦除了多余的参数
const p: Person = info

function foo(val: Person) {
    console.log(val.name);
    console.log(val.age);
    console.log(val.hobby);
    (val as type).address
}

foo(info)

export { }

