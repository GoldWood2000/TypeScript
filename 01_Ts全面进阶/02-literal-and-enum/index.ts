type Tmp = true | false | (() => {}) | (1 | 2)
const foo: Tmp = 1


//对象类型的联合，来实现手动的互斥属性 ,即这一属性如果有字段1，那就没有字段2
type Tmp2 = {
  user: {
    vip: true,
    expires: string
  } | {
    vip: false,
    promotion: string
  }
}

declare const bar: Tmp2;
//类型收窄后，推导出来只有expires
if (bar.user.vip) {
  console.log(bar.user.expires);
}

enum Item {
  Foo,
  bar,
  baz
}

const itemRes = Item.baz
const item = Item[2]
console.log(item);

//仅有值为数字的枚举成员才能够进行这样的双向枚举
// "use strict";
// var Items;
// (function (Items) {
//     Items[Items["Foo"] = 0] = "Foo";
//     Items[Items["Bar"] = 1] = "Bar";
//     Items[Items["Baz"] = 2] = "Baz";
// })(Items || (Items = {}));

// Items["Foo"] = 0 本质 可以看成 obj[k] = v 即 一个未定义变量名 = v， 例如 let a = Items["Foo"] = 0 最终都是 a = 0

//常量枚举
const enum Item2 {
  item1,
  item2,
}

Item2.item1
//常量枚举 只能通过枚举成员访问枚举值（而不能通过值访问成员）
// Item2[1]

// const fn = () => Promise.resolve(111111)
const fn = () => 1 + 2

enum Items {
  Foo = fn()
}

type numberArr<T> = T extends number[] ? T[number] : 2
type Res = numberArr<1>
type Res1 = numberArr<[1, 2, 3, 4]>

const render = () => 1 + 3
enum Foo {
  'Foo' = 'A',
  'Bar' = 'B',
  'Baz' = render()
}
type Key = keyof typeof Foo
type Value = `${Foo}`

type Res3 = 1 | 2 | 3
type IValue2 = `${Res3}`


enum Res4 {
  Foo,
  Bar,
  Baz
}
type IValue3 = `${Res4}`
