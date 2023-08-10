type LiteralToPrimitive<T> =
  T extends string ?
  string :
  T extends number ?
  number :
  T extends bigint ?
  bigint :
  never

function universalAdd<T extends number | bigint | string>(x: T, y: T): LiteralToPrimitive<T> {
  return x + (y as any);
}
//泛型参数的实际类型会在实际调用时才被填充（类型别名中显式传入，或者函数中隐式提取）
//函数的泛型是日常使用较多的一部分，更明显地体现了泛型在调用时被填充这一特性，而类型别名中，我们更多是手动传入泛型。
//这一差异的缘由其实就是它们的场景不同，我们通常使用类型别名来对已经确定的类型结构进行类型操作，比如将一组确定的类型放置在一起。
//而在函数这种场景中，我们并不能确定泛型在实际运行时会被什么样的类型填充
universalAdd('leo', 'dicaprio')
type StringorNumber = string | number
const params1: StringorNumber = Math.round(99) > 50 ? 'leo' : 18
universalAdd(params1, 90)


//Mapped types #12114 https://github.com/Microsoft/TypeScript/pull/12114
type Item = { a: string, b: number, c: boolean };
type T1 = { [key in 'x' | 'y']: number }
type T2 = { [key in 'x' | 'y']: key }
type T3 = { [key in keyof Item]: key }
type T4 = { [key in keyof Item]: Item[key] }
type UserInfo = { name: string, age: number, male: boolean }
type T5 = UserInfo[keyof UserInfo]


//infer 关键字
type Fnc = (...args: any[]) => any
type FunctionReturnType<T extends Fnc> = T extends (...args: any[]) => infer R ? R : never
type Result1 = FunctionReturnType<() => string>

type Swap<T extends any[]> = T extends [infer A, infer B] ? [A, B] : T
type SwapResult1 = Swap<[1, 2]>
type SwapResult2 = Swap<[1, 2, 3]>


// 提取首尾两个
type ExtractStartAndEnd<T extends any[]> = T extends [
  infer Start,
  ...any[], //rest infer
  infer End
] ? [Start, End] : T

// 调换首尾两个
type SwapStartAndEnd<T extends any[]> = T extends [
  infer Start,
  ...infer Left,
  infer End
] ? [End, ...Left, Start] : T
type SwapStartAndEndResult1 = SwapStartAndEnd<[1, 2, 3, 4]>

type ArrayItemType<T> = T extends Array<infer ElementType> ? ElementType : never
type ArrayItemTypeResult1 = ArrayItemType<[]>
type ArrayItemTypeResult2 = ArrayItemType<string[]>
type ArrayItemTypeResult3 = ArrayItemType<[string, number]>

type ObjectItemType<T> = T extends { a: 1, b: infer B, c: 3 } ? { [Key in keyof T]: B } : {}
type ObjectItemTypeResult1 = ObjectItemType<{ a: 1, b: 'leo', c: 3 }>

type ObjectExtract<T, K extends keyof T> = {
  [key in K]: string
}
const obj = { name: 'leo', age: 18, male: true }
type a = keyof typeof obj
type ObjectExtractResult1 = ObjectExtract<typeof obj, keyof typeof obj>

type PropType<T, K extends keyof T> = T extends { [Key in K]: infer R } ? R : never
type PropTypeResult1 = PropType<{ name: 'leo' }, 'name'>
type PropTypeResult2 = PropType<{ name: 'leo', age: 18 }, 'name' | 'age'>
type PropTypeResult3 = PropType<{ name: 'leo', age: { '1': '1', '2': 2 } }, 'name' | 'age'>

// 反转键名与键值
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
type ReverseKeyValue<T extends Record<string, unknown>> = T extends Record<infer K, infer V> ? Record<V & string, K> : never
type ReverseKeyValueResult1 = ReverseKeyValue<{ "key": "value" }>;

type ReverseKeyValue2<T extends Record<string, string>> = T extends Record<infer K, infer V> ? Record<V & string, K> : never;
type ReverseKeyValueResult2 = ReverseKeyValue2<{ "key": "value" }>;

type ReverseKeyValue3<T extends Record<string, string>> = T extends Record<infer K, infer V extends string> ? Record<V, K> : never;
type ReverseKeyValueResult3 = ReverseKeyValue2<{ "key": "value" }>;

type PromiseValue<T> = T extends Promise<infer V> ? V : T
type PromiseValueResult1 = PromiseValue<Promise<string>>
type PromiseValueResult2 = PromiseValue<number>
type PromiseValueResult3 = PromiseValue<Promise<Promise<boolean>>>;

type PromiseValue2<T> = T extends Promise<infer V> ? V extends Promise<infer N> ? N : V : T
type PromiseValueResult4 = PromiseValue2<Promise<Promise<boolean>>>
type PromiseValueResult5 = PromiseValue2<Promise<Promise<Promise<'leo'>>>>

type PromiseValue3<T> = T extends Promise<infer V> ? PromiseValue3<V> : T;
type PromiseValueResult6 = PromiseValue3<Promise<Promise<Promise<'leo'>>>>


//分布式条件类型（Distributive Conditional Type）   也称条件类型的分布式特性
type Condition<T> = T extends 1 | 2 | 3 ? T : never;
type Res1 = Condition<1 | 2 | 3 | 4 | 5>; // 1 | 2 | 3

type Condition2<T> = T extends 1 | 2 | 3 ? never : T;
type Res2 = Condition2<1 | 2 | 3 | 4 | 5>;

type Naked<T> = T extends boolean ? 'Y' : 'N'
type Wrapped<T> = [T] extends [boolean] ? 'Y' : 'N'
type Res3 = Naked<number | boolean>; // "N" | "Y"
type Res4 = Wrapped<number | boolean> // "N"

//因为裸类型会触发分发，从而返回联合类型， 数组、元组、对象、Promise则不会触发分发
type NoDistribute<T> = T & {};
type Wrapped2<T> = NoDistribute<T> extends boolean ? "Y" : "N";
type Res5 = Wrapped2<number | boolean>; // "N"
type Res6 = Wrapped2<true | false>; // "Y"
type Res7 = Wrapped2<true | false | 599>; // "N";

type Wrapped3<T> = Promise<T> extends Promise<boolean> ? 'Y' : 'N'
type Res8 = Wrapped3<true>
type Wrapped4<T> = T[] extends (boolean | number)[] ? 'Y' : 'N'
type Res9 = Wrapped4<1 | true>

type IsNever<T> = [T] extends [never] ? true : false;
type IsNeverRes1 = IsNever<any>; // false
type IsNeverRes2 = IsNever<never>; // true
type IsNeverRes3 = IsNever<"linbudu">; // false

// never通过泛型参数传入，会跳过判断
//通过泛型传入的参数为 never，则会直接返回 never
type Special4<T> = T extends never ? 1 : 2;
type Special4Res = Special4<never>; // never
type Special4Re2 = never extends never ? 1 : 2; // 1

type IsAny<T> = 0 extends 1 & T ? true : false
type IsUnknown<T> = unknown extends T ? IsAny<T> extends true ? false : true : false

export { }