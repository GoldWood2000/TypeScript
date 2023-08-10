type fooType = (num1: number, num2: number) => number

const foo: fooType = (num1: number, num2: number) => {
    return num1 + num2
}

console.log(foo(20,30));


//默认值
const bar = (num1: number, num2: number = 100) => {
    return num1 + num2
}
console.log(bar(20));

//剩余参数
const baz = (...num: number[]) => {
    return num
}

console.log(baz(1,2,3,4,5));


//函数重载
function overload(num1: number, num2: number): number;  //定义
function overload(num1: string, num2: string): string;

function overload(num1: number | string, num2: number | string): any {  //实现  
    (typeof num1 === 'string' && typeof num2 === 'string') && console.log(num1.length + num2.length);
    (typeof num1 === 'number' && typeof num2 === 'number') && console.log(num1 + num2);
} 

overload(2,3);
overload('leo','dicaprio')


// this是可以被推导出来 info对象(TypeScript推导出来)
const info = {
    name: "why",
    eating() {
        console.log(this);
        console.log(this.name + " eating")
    }
}
  
info.eating()



export {}