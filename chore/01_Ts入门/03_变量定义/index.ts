//JavaScript类型
//string 原始值类型，String原始值包装类型
let str: string = 'dicaprio'
let foo: String = 'leo'

console.log(str);
console.log(foo);

//类型推导/推断
let bar = 123
console.log(bar);


//array
const array: Array<string> = [] //不推荐，react jsx中有冲突
const array2: string[] = []     //推荐

//object
const obj = {
    name: 'leo',
    age: 18
}

//null undefined
const n: null = null
const u: undefined = undefined

//syboml
let name: symbol = Symbol('name')
let name2: symbol = Symbol('name')
const obj2 = {
    [name]: 'leo',
    [name2]: 'dicaprio'
}

//typescript 类型

//any unknow
let baz: any = 'lei'
baz = 'dicaprio'
console.log(baz);

let result: unknown 
function fn1() {
    return 'leo'
}
function fn2() {
    return 123
}
let flag = true
flag ? result = fn1() : result = fn2()
console.log(result);

//unkonw可以被赋值任何类型的值， 但是定义的unkonw类型只能赋值给any和unkonw
let bof: unknown = '123'
let box: unknown = bof
// let bov: string = bof
console.log(box, bof);

//void
function fn3(): void {
    
}

//never
function fn4(): never {
    throw new Error
}


export {}


