type World = 'World'
type HelloWorld = `Hello ${World}`
//https://www.typescriptlang.org/play?#code/C4TwDgpgBAYglgOwCYAkIEMkB4AqEAewUBwEyAzlOcAE6IDmANFAMoCuARi7Q8YWUkrU6CegD4oAXih5CfUhSgADACQBvRADMINKGkwBfdey49RRjQm26AMumoGlUAPzL1+pI6gAfN2rsOTgBcUJroADbkEABQ0aCQUABKAIxSsIioGNgA5OGIHGxIbNnMuYjZEgD0lVAARLU+dQVFtXHg0IkATGnwyB5YZQjNxaXFVTW1eUMNvrUtbQmJAMw9Gf2DwyVQ2QDWFVDVoRFRCx0ALKt9WQNTm6X7h5MzdfmFbK3xHQCsl5mYA1tsg8amFIjFPkkAGy-dbbe7jKB1Z4NVqxCHcGhYcgSaSUEgCSiqSzWKA2CCaYAWLQ6JIQQIuUnkoi+RJ0oghBAQABuOlOSQA7GkMQMAPYVPmJAAcQtoA22YiAA
//泛型目前有效的类型只有 string | number | boolean | null | undefined | bigint
type Greet<T extends string | number | boolean | null | undefined | bigint> = `Hello ${T}`;
type Greet1 = Greet<"linbudu">; // "Hello linbudu"
type Greet2 = Greet<599>; // "Hello 599"
type Greet3 = Greet<true>; // "Hello true"
type Greet4 = Greet<null>; // "Hello null"
type Greet5 = Greet<undefined>; // "Hello undefined"
type Greet6 = Greet<0x1fffffffffffff>; // "Hello 9007199254740991"

//这也意味着它并没有实际意义，此时就是一个无法改变的模板字符串类型，但所有 Hello 开头的字面量类型都会被视为 Hello ${string} 的子类型
type Greeting = `Hello ${string}`;
type Res = 'Hello World' extends Greeting ? 1 : 2
type Res1 = Greet1 extends Greeting ? 1 : 2
type Res2 = 'leo' extends Greeting ? 1 : 2
type Res3 = 'leo Hello' extends Greeting ? 1 : 2
const Res4: Greeting = 'Hello leo'

type Version = `${number}.${number}.${number}`;
const v1: Version = '1.1.0';
// X 类型 "1.0" 不能赋值给类型 `${number}.${number}.${number}`
// const v2: Version = '1.0';


type Brand = 'iphone' | 'xiaomi' | 'honor';
type Memory = '16G' | '64G';
type ItemType = 'official' | 'second-hand';

type SKU = `${Brand}-${Memory}-${ItemType}`;

//重映射
type CopyWithRename<T extends object> = {
  [Key in keyof T as `modified_${string & Key}`]: T[Key]
}
interface Foo {
  name: string;
  age: number;
}
type CopiedFoo = CopyWithRename<Foo>;

type ReverseName<Str> = Str extends `${infer First} ${infer Last}` ? `${Capitalize<Last>} ${First}` : Str
type ReverseName2<Str> = Str extends `${infer First}${infer C}${infer Last}` ? `${Capitalize<Last>} ${First}${C}` : Str
type ReverseName3<Str extends `Hello ${string}`> = Str extends `${infer First} ${infer Last}` ? `${Capitalize<Last>} ${First}` : Str

type Res5 = ReverseName<'leo dicaprio'>
type ReversedRes1 = ReverseName<'Budu Lin 599'>;
type ReversedRes2 = ReverseName2<'leodicaprio'>;
type ReversedRes3 = ReverseName3<'Hello leo'>;
type ReversedRes4 = ReverseName<'A B C'>;


declare function handler<Str extends string>(arg: `Guess who is ${Str}`): Str;

handler(`Guess who is Linbudu`); // "Linbudu"
handler(`Guess who is `); // ""
handler(`Guess who is  `); // " "

type PickByValueType<T, Type> = {
  [K in keyof T as T[K] extends Type ? K : never]: T[K]
}

type ReturnTypeRes<T> = T extends (...any: any[]) => infer R ? R : never
interface R {
  (): void
}
type Res6 = ReturnTypeRes<() => string>
type Res7 = ReturnTypeRes<R>

type DoubleProp<T> = {
  [P in keyof T & string as `${P}1` | `${P}2`]: T[P]
}
type T70 = DoubleProp<{ a: string, b: number }>;  // { a1: string, a2: string, b1: number, b2: number }
type T = keyof T70


type xhrTypes = "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "CONNECT" | "HEAD";

type AnyCase<T extends string> =
  string extends T ? string :
  T extends `${infer F1}${infer F2}${infer R}`
  ? (`${Uppercase<F1> | Lowercase<F1>}${Uppercase<F2> | Lowercase<F2>}${AnyCase<R>}`)
  : T extends `${infer F}${infer R}`
  ? `${Uppercase<F> | Lowercase<F>}${AnyCase<R>}`
  : ""
type AnyCaseXhrTypes = AnyCase<xhrTypes>;

export { }