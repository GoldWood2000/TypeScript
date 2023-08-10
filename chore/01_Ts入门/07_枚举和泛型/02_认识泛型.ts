//泛型的本质： 类型参数化

function sum<T>(arg: T) {
    return arg
}

sum<number>(20)
sum<string>('str')


function foo<T, K, V>(arg: T, arg2: K, arg3: V, ...arg4:T[]) {
    console.log(arg4);
}

foo<number,string,number>(12314, 'str', 1, 2, 3, 3)
 

interface bar<T,K> {
    name: T,
    age: K
}
const info: bar<string,number> = {
    name: 'leo',
    age: 18
}



export {}

