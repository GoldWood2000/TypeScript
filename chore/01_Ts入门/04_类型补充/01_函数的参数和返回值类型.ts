
//可以不加函数返回值类型，类型推导会自动推导出来
function sum (num1: number, num2: number): number {
    return num1 + num2
}

//也可以不写返回值 类型推导会自动推导出来
function foo(): {name: string}[] {
    return [{name: 'leo'}, {name: 'dicaprio'}]
}

console.log(foo());



const arr = ['leo', 'dicaprio']
//匿名函数可以不加类型，类型推导会自动推导出来
arr.forEach((item) => {
    console.log(item);
})

export {}