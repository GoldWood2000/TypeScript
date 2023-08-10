interface Person {
    name: string,
    age?: number,
    [propName: string]: any, 
    [propName: number]: number,
    say: () => void,
    eat(): string,
    friend: {
        name?: string
    }
}

const person: Person = {
    name: 'leo',
    height: 1.8,
    // dar: 222,           //可以定义多个[propName: string]: any, 
    1: 2,                  //
    // 3: 4,
    bar: () => {
        console.log('定义[propName: string]: any  写的函数');
        
    },
    say: () => {
        console.log('say');
    },
    eat: () => {
        return 'eat'
    },
    friend: {
        // name: 'dicaprio'
    }
}

function foo(p: Person) {
    console.log(p.name);
    console.log(p?.height);
    console.log(p?.dar);
    console.log(p.friend.name?.length);
    p.say()
    console.log(p.eat());
    p.bar()
    console.log(p[1]);
    console.log(p?.[3]);
}

foo(person)



//函数接口
interface sayHi {
    (word: string): string
}

const say:sayHi = (word: string) => {
    return word;
}

