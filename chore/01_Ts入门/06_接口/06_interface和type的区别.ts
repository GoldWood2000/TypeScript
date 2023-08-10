interface Person {
    name: string
    age?: number
} 

interface Person {  //相同的名字的接口只会合并而type则会报错
    hobby: string
}

const foo: Person = {
    name: 'leo',
    hobby: '演戏',
}

// type bar = {
//     name: string
// }
// type bar = {
//     age: number
// }


export {}