// type T = 'a' | 'b' | 'c';
// const a = 'a';
// function isT(input: T): input is T {
//   return input === 'a' || input === 'b' || input === 'c'
// }
// if (isT(a)) {
//   a === 'a'
// }

type Result1 = string extends {} ? 1 : 2
type Result2 = string extends Object ? 1 : 2
type Result3 = any extends string ? 1 : 2
type Result4 = '1' extends string | object ? 1 : 2

//联合类型 结论：字面量类型 < 包含此字面量类型的联合类型，原始类型 < 包含此原始类型的联合类型

type Result5 = '1' | '2' | '3' | 4 extends string ? 1 : 2

type Result6 = 'leo' extends 'leo' | 'dicaprio'
  ? 'leo' | 'dicaprio' extends string
  ? 2 : 1
  : 0

type Result7 = never extends 7 ? 1 : 2
type Result8 = 'leo' extends 'dicaprio' ? 1 : 2

type Result9 = 'leo' | 18 extends number | string ? 1 : 2
type Result10 = 'leo' | 'dicaprio' extends 'leo' ? 1 : 2

//同一基础类型的字面量联合类型 < 此基础类型。
type Result11 = 'lin' | 'bu' | 'budu' extends string ? 1 : 2; // 1
type Result12 = {} | (() => void) | [] extends object ? 1 : 2; // 1

type Result13 = String extends {} ? 1 : 2
type Result14 = String extends string ? 1 : 2
type Result15 = 1 | 2 | 3 | 4 | 5 extends 1 | 2 | 3 ? 1 : 2
type Result16 = {} extends boolean ? 1 : 2
type Result17 = true | false & {} extends boolean ? 1 : 2

type Result18 = string extends any ? 1 : 2
type Result19 = any extends string ? 1 : 2
type Result20 = any extends any ? 1 : 2
type Result21 = never extends any ? 1 : 2
type Result22 = any extends never ? 1 : 2
type Result23 = never extends string ? 1 : 2
type Result24 = string extends never ? 1 : 2
type Result25 = 0 extends 1 & unknown ? 1 : 2
type Result26 = 0 extends 1 & any ? 1 : 2

//交叉类型只有传入其本身、对应的原始类型、包含其本身的联合类型，才能得到一个有意义的值
type Result27 = 1 & any
type Result28 = any extends unknown ? 1 : 2
type Result29 = unknown extends any ? 1 : 2
type Result30 = any extends number ? 1 : 2 // 1 | 2
//any 代表了任何可能的类型，当我们使用 any extends 时，它包含了“让条件成立的一部分”，以及“让条件不成立的一部分”。
//而从实现上说，在 TypeScript 内部代码的条件类型处理中，如果接受判断的是 any，那么会直接返回条件类型结果组成的联合类型
//只有 any 才会直接返回条件类型结果组成的联合类型，any和any[]不同
type Result31 = any[] extends number[] ? 1 : 2 // 1
type Obj1 = { name: string }
type Obj2 = { name: string, age?: number }
type Result32 = Obj1 extends Obj2 ? 1 : 2


type T1 = 'a' | 'b' & string | number // a | b | number
type T2 = 1 | 'b' & string | number // b | number
type T3 = 1 | 'b' & string // b | 1
type T4 = 1 | 'b' & number // 1
type T5 = 1 | 2 & 1 | 3 // 1 | 3
type A = 1 | 2
type B = 2 | 3
type C = A & B
type D = (1 | 2) & (2 | 3)

//https://stackoverflow.com/questions/75130918/intersection-of-union-of-different-types-is-not-what-i-expected
type T6 = (1 | 'b') & (string | number) // 1 | "b"
type T7 = (1 | 2) & (1 | 3) // 1

type T8 = 1 | ('b' & string) | number
type T9 = 1 | (2 & 1) | 3
type T10 = 'leo' | 'dicaprio' & (string | number)
type T11 = string | number & {}
type T12 = (string | number) & {}
type T13 = 1 | number
type T14 = 'leo' | string

type T15 = unknown & string
type T16 = never & string
type T17 = any & string

type NoDistribute<T> = T & {};
type T18 = NoDistribute<boolean>
type T19 = NoDistribute<boolean | string>
type T20 = (boolean | string) & {}
type T22 = boolean & {}

export { }