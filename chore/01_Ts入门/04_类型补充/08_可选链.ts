type Person = {
    name: string,
    friend?: {
        name: string,
        age?: number,
        grilfriend?: {
            name: string
        }
    },
    eat?: () => void
}


const info: Person = {
    name: 'leo',
    friend: {
        name: 'dicaprio',
        grilfriend: {
            name: 'jem'
        }
    },
    eat: () => {
        console.log('eat');
    }
    
}

let str: string = 'chen'
function foo(a?: string) {
    console.log(a?.length);
}

console.log(info.friend && info.friend.grilfriend && info.friend.grilfriend.name);     //es5
console.log(info.friend?.grilfriend?.name);    //?.
info.eat?.()
foo(str);
foo();







export {}