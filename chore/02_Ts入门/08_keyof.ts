interface Person {
  name: string;
  age: number;
  gender: string;
}

type person = 'name' | 'age' | 'gender'

class Teacher {
  constructor(private info: Person) {

  }

  //keyof实现 推荐
  getInfo<T extends keyof Person>(key: T) {
    return this.info[key];
  }

  //字面量实现
  getInfo2(key: person) {
    return this.info[key];
  }
}

const teacher = new Teacher({
  name: "leo",
  age: 18,
  gender: "male",
});

const foo = teacher.getInfo("gender");
const foo2 = teacher.getInfo2("age");
console.log(foo);
console.log(foo2);



interface Dictionary<T> {
  [params: string]: T
}

const bar: Dictionary<number> = {
  a: 1,
  b: 2
}


type p = keyof Person
let o: p = 'age'


export { };
