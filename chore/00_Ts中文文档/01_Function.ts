//函数类型表达式（Function Type Expressions）
type GreetFunction = (a: string) => void;

//调用签名（Call Signatures）
type DescribableFunction = {
  description: string;
  foo: (T: string) => boolean;
  (someArg: number): void;
};
function doSomething(a: DescribableFunction) {
  new a(1)
  a(2)
  a.foo('leo')
  a.description
}

//构造签名 （Construct Signatures）
type ConstructFunction = {
  new(someArg: string): boolean
}
function doSomething2(a: ConstructFunction) {
  new a('leo')
}

//一些对象，比如 Date 对象，可以直接调用，也可以使用 new 操作符调用
type CallorConsstruct = {
  new(a: number): string
  (n: string): number
}

function doSomething3(a: CallorConsstruct) {
  new a(1)
  a('leo')
}


// ******* 推断（Inference）*******
function map<T, F>(arr: T[], fn: (v: T) => F) {
  return arr.map(fn)
}
const a = map(['1', '2', '3'], (v) => parseInt(v))

//demo1
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
//readonly , extends : 当使用了 `const` 字面量代表对象字面量的属性，将使用 `readonly` 修饰，数组字面量将变成 `readonly` 元组，表达式中的任何字面量类型都不应该被扩展
//[K in T[number]] 对数组里每个index进行循环将index转换成key
type TupleToObject<T extends readonly any[]> = { [K in T[number]]: K }
type C1 = TupleToObject<typeof tuple>
// expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

//demo2
type TestFunOne<T extends any[]> = {
  [key in keyof T]: key;
}
type SomeTestTwo<T extends any[]> = {
  [key in T[number]]: key;
}
type test1 = ['a', 'b', 'c', 8, 1];
type result1 = TestFunOne<test1>; // ["0", "1", "2", "3", "4"]
type result2 = SomeTestTwo<test1>; //{ 1: 1; a: "a"; b: "b";c: "c";8: 8;}

type keyofArr = keyof test1
const Tarr: keyofArr = '4'
type ValueofArr = test1[number]


// ******* 约束（Constraints） *******    记住，所谓泛型就是用一个相同类型来关联两个或者更多的值。
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  }
  return b;
}

longest([1, 2], [2, 3, 4])
longest('leo', 'dicaprio')
//泛型约束实战（Working with Constrained Values）
// 错误
// function minimumLength<T extends { length: number }>(obj: T, minimum: number): T {
//   if (obj.length >= minimum) {
//     return obj
//   }
//   return { length: minimum }
// }

//反例证明为什么错误 //而这其中的问题就在于函数理应返回与传入参数相同类型的对象，而不仅仅是符合约束的对象
// 'arr' gets value { length: 6 }
// const arr = minimumLength([1, 2, 3], 6);
// and crashes here because arrays have
// a 'slice' method, but not the returned object!
// console.log(arr.slice(0));


//声明类型参数 （Specifying Type Arguments）
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}

// const arr = combine([1, 2, 3], ["hello"]);
// Type 'string' is not assignable to type 'number'
const arr = combine([1, '2', 3], ["hello"]);
const arr2 = combine<string | number>([1, 2, 3], ["hello"]);


//函数重载 重载签名和实现签名（Overload Signatures and the Implementation Signature）
function fn(x: string): void;
function fn(x: string, y: boolean | string): void;
function fn(x: string, y?: boolean | string) {
  // ...
  typeof y === 'string' && y.replace('', '')
}
// Expected to be able to call with zero arguments
fn('leo', true);
fn('leo', 'dicaorio');
fn('leo');


type voidFunc = () => void
const f4: voidFunc = () => {
  return true
}
const f5: voidFunc = () => true
const f6: voidFunc = function () {

}
function f7(): void {

}
function f2(): void {
  // @ts-expect-error
  return true;
}
const f3 = function (): void {
  // @ts-expect-error
  return true;
};

export { }