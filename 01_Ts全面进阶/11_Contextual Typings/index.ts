window.onerror = (event, source, line, col, err) => { };

type CustomHandler = (name: string, age: number) => boolean;
const handler: CustomHandler = (name, age) => true

declare const struct: {
  handler: CustomHandler
}
struct.handler = (name, age) => false

declare let func: (raw: number) => (input: string) => any;
// raw → number
func = (raw) => {
  // input → string
  return (input) => { };
};

class Foo {
  foo!: number;
}

class Bar extends Foo {
  bar!: number;
}

let f1: { (input: Foo): void } | { (input: Bar): void };
// 参数“input”隐式具有“any”类型。
f1 = (input) => { };

let f2: { (input: Foo | Bar): void };
// Foo | Bar
f2 = (input) => { };

let f3:
  | { (raw: number): (input: Foo) => void }
  | { (raw: number): (input: Bar) => void };

// raw → number
f3 = (raw) => {
  // input → Bar
  return (input) => { };
};


//将更少参数的函数赋值给具有更多参数的函数类型
function _handler(arg: string) {
  console.log(arg);
}
type fn = (arg1: string, arg2: number) => void
function useHandler(callback: fn) {
  callback('linbudu', 599);
}
useHandler(_handler);
const Res1: fn = (arg1) => {
  arg1.replace
}
