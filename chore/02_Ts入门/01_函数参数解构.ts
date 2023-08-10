interface info {
    name: string, 
    age: number
}

//对象作为参数解构
function foo({name, age}: info) {
    console.log(name);
    console.log(age);
}

foo({name: 'leo',age: 18})


function bar([arg1,arg2,arg3]: [string, number, number]) {
    console.log(arg1);
    console.log(arg2);
    console.log(arg3);
}

bar(['dicaprio',18,1.8])


export {}