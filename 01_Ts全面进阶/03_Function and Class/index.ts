//拥有多个重载声明的函数在被调用时，是按照重载的声明顺序往下查找的
function fnc(foo: string, bar: true): string
function fnc(foo: string, bar?: false): number
function fnc(foo: string, bar?: boolean): string | number {
  if (bar) {
    return String(foo)
  } else {
    return foo.length * 2
  }
}

const fn1 = fnc('leo', true)
const fn2 = fnc('leo', false)
const fn3 = fnc('leo')


class Base {
  printWithLove() {
    console.log('Base');
  }
}

class Derived extends Base {
  override printWithLove() {
    super.printWithLove()
    console.log('Derived');
  }
}

const derived = new Derived()
derived.printWithLove()

class Foo { }

interface FooStruct {
  new(): Foo
  bar(): string
}

declare const NewableFoo: FooStruct
const foo = new NewableFoo();

interface ComesFromString {
  name: string;
}

interface StringConstructable {
  new(n: string): ComesFromString;
}

class MadeFromString implements ComesFromString {
  constructor(public name: string) {
    console.log('ctor invoked');
  }
}

function makeObj(n: StringConstructable) {
  return new n('hello!');
}

console.log(makeObj(MadeFromString).name);


export { }
