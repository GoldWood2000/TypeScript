// 一种组合类型的方式: 联合类型
type WhyType = number | string
type Direction = "left" | "right" | "center"


// 另一种组件类型的方式: 交叉类型 &
interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

type MyType1 = ISwim | IFly
type MyType2 = ISwim & IFly

//联合类型可以实现其中一个
const obj1: MyType1 = {
  flying() {

  },
  swimming() {

  },
}

//交叉类型必须2种全部实现
const obj2: MyType2 = {
  swimming() {

  },
  flying() {

  }
}



function extend<T, U>(first: T, second: U) {
  let result = {} as T & U

  for (let id in first) {
    console.log(2222);
    result[id] = first[id] as any
  }
  for (let id in second) {
    result[id] = second[id] as any
  }

  return result
}

class Person {
  constructor(public name: string) {

  }
}

interface IS {
  study: () => void
}

class Student implements IS {
  study = () => {
    console.log('study');
  }
}

const foo = extend(new Person('leo'), new Student());
console.log(foo);
console.log(foo.name);
foo.study()

interface bax {
  name: string
}
interface bar {
  age: number
}
const t = { name: 'leo' }
const t2 = { age: 18 }
const bav: bax & bar = { ...t, ...t2 }
const bag: bax | bar = { ...t, ...t2 }
console.log(bav.name, bav.age);
(bag as bar).age
'name' in bag && bag.name



export { }

