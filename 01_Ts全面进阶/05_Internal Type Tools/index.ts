/**
 * 类型别名
 * 联合类型和交叉类型
 * 索引类型 (索引签名类型、索引类型查询、索引类型访问)
 * 映射类型
 */

//T / K / U / V / M / O 常用泛型参数名称
type Factory<T> = T | number

const foo: Factory<'leo'> = 'leo'
const foo2: Factory<boolean> = true

type UnionIntersection1 = (1 | 2 | 3) & (1 | 2); // 1 | 2

interface AllStringTypes {
  [key: string]: string
}

interface AllStringTypes2 {
  [key: string]: number;
  [key2: symbol]: string;
}

type PropType1 = AllStringTypes['leo']
type PropType2 = AllStringTypes['18']
type PropType3 = AllStringTypes2[symbol]
const P3: AllStringTypes2 = {
  [Symbol('A')]: '',
  'leo': 18
}

interface NumberOrBooleanTypes {
  PropA: number;
  PropB: boolean;
  [Key: string]: boolean | number;
}

// interface foo {
//   leo: string  //具体的键值对类型需要符合索引签名类型
//   [key: string] :number
// }

// const bar: foo = {
//   leo: 'leocs'
// }


//索引类型查询 keyof keyof 的产物必定是一个联合类型
interface keyofTypes {
  leo: 18
  18: true
}

type FooKeys = keyof keyofTypes
const fooKeyof: FooKeys = 18
const fooKeyof2: FooKeys = 'leo'

type anyKeyof = keyof any
const anyType: anyKeyof = 'leo'
const anyType2: anyKeyof = 18


//索引类型访问
interface Foo {
  propA: number;
  propB: boolean;
  propC: string;
}
//索引类型查询的本质其实就是，通过键的字面量类型（'propA'）访问这个键对应的键值类型（number）
type PropTypeUnionK = keyof Foo
type PropTypeUnionV = Foo[keyof Foo]
type PropTypeUnionC = Foo['propA' | 'propC']
const unionK: PropTypeUnionK = 'propB'
const unionV: PropTypeUnionV = false

type A<T extends keyof Foo> = T
type PropComputedProperty = Foo[A<'propB'>]
type PropComputedProperty2 = Foo[A<'propC'>]

type Arr = [1, 2, 'leo']
type ArrIndexAccess = Arr[number]
type ArrIndexAccessWithKeyof = keyof Arr
const A1: ArrIndexAccessWithKeyof = 'concat'
const A2: ArrIndexAccessWithKeyof = '0'



//映射类型的主要作用即是基于键名映射到键值类型
//Mapped types #12114 https://github.com/Microsoft/TypeScript/pull/12114
type Item = { a: string, b: number, c: boolean };
type T1 = { [key in 'x' | 'y']: number }
type T2 = { [key in 'x' | 'y']: key }
type T3 = { [key in keyof Item]: key }
type T4 = { [key in keyof Item]: Item[key] }
type UserInfo = { name: string, age: number, male: boolean }
type T5 = UserInfo[keyof UserInfo]


type Stringify<T> = {
  [K in keyof T]: string
}

interface LiteralTypes {
  propA: number;
  propB: boolean;
  propC: string;
  propD: () => void
}

// type StringifiedFoo = {
//   propA: string;
//   propB: string;
//   propC: string;
//   propD: string;
// }
type StringifiedFoo = Stringify<LiteralTypes>

type Clone<T> = {
  [K in keyof T]: T[K]
}
type CloneTypes = Clone<LiteralTypes>

type stringTypes = keyof string
const keys: stringTypes = 18



const func = (input: string) => {
  return input.length > 10;
}

// boolean
type FuncReturnType = ReturnType<typeof func>;


//类型守卫
const isString = (input: unknown): input is string => {
  return typeof input === 'string'
}


function vIsString(input: string | number) {
  if (isString(input)) {
    // (input as string).replace
    input.replace('123', '456')
  }
}


export type Falsy = false | "" | 0 | null | undefined;
export const isFalsy = (val: unknown): val is Falsy => !val
function vIsFalsy(val: unknown) {
  if (isFalsy(val)) {
    (val as 0).toFixed();
    (val as "").replace('', '!')
  }
}

type objMine = {
  name: string
  age: number
  male: boolean
}
const isMine = (obj: unknown): obj is objMine => {
  return typeof obj === 'object'
}
function vObjMine(obj: unknown) {
  if (isMine(obj)) {
    obj.name
    obj.age
  }
}


type Primitive = string | number | boolean | undefined;
const isPrimitive = (val: unknown): val is Primitive => {
  // const a = typeof val
  return ['string', 'number', 'boolean', 'undefined'].includes(typeof val)
}


function assert(condition: unknown, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg)
  }
}

function vAssert(val: string) {
  assert(val)
  val.replace('', '')
}

function assertNonNull<T>(obj: T): asserts obj is NonNullable<T> { }

function vNonNull(val?: string) {
  assertNonNull(val)
  val.replace('', '111')
}