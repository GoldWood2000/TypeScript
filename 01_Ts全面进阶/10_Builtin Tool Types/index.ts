// 属性修饰工具类型
type _Partial<T> = {
  [P in keyof T]?: T[P];
};

type _Required<T> = {
  [P in keyof T]-?: T[P];
};

type _Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

type UserInfo = {
  name: string,
  age: number,
  identity: {
    id: number,
    student: boolean,
    home: {
      parent: string,
      pet: number,
      doSomething: () => void
    }
  }
}
type Optional = _Partial<UserInfo>

// 对于深层次的对象结构变为可选
// https://stackoverflow.com/questions/61132262/typescript-deep-partial/61132308#61132308
// type _DeepPartial<T> = T extends object ? {
//   [P in keyof T]?: _DeepPartial<T[P]>;
// } : T;
type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}
type DeepOptional = DeepPartial<UserInfo>
// const deepTest: DeepOptional = {
//   identity: {
//     home: {
//       doSomething: () => {

//       }
//     }
//   }
// }

//修饰部分属性键或者同类型
type SomePartialWithKeyOrType<T, K extends keyof T> = T extends object ? {

} : T


type _Record<K extends keyof any, T> = {
  [P in K]: T;
};

type _Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type _Extract<T, U> = T extends U ? T : never; //Extract(交集)，提取 集合T 中也存在于 集合U 中的类型分支，即 T 与 U 的交集
type _Exclude<T, U> = T extends U ? never : T; //Exclude(差集)，提取 集合T 中不存在于 集合U 中的类型分支，即 T 相对于 U 的差集
type Concurrence<A, B> = A | B;                //(并集)
type Complement<A, B extends A> = Exclude<A, B>//(补集)

//_Extract
type Tmp7 = _Extract<'name' | 'age' | 'male', 'name' | 'male'>
type Tmp8 = _Extract<'name' | 'age' | 'male', string>
type Tmp9 = _Extract<'name' | 'age' | 'male', 'age'>

//_Exclude 差集存在相对的概念，即 A 相对于 B 的差集与 B 相对于 A 的差集并不一定相同，而交集则一定相同
type Tmp1 = _Exclude<1, 2>; // 1
type Tmp2 = _Exclude<1 | 2, 2>; // 1
type Tmp3 = _Exclude<1 | 2 | 3, 2 | 3>; // 1
type Tmp4 = _Exclude<1 | 2 | 3, 2 | 4>; // 1 | 3
type Tmp5 = _Exclude<'name' | 'age', 'age'>
type Tmp6 = 'name' | 'age' extends 'age' ? 1 : 2
type Tmp10 = _Exclude<'name' | 'age' | 'male', 'name' | 'male'>
type Tmp11 = _Exclude<'name' | 'age' | 'male', 'male'>
type Tmp14 = _Exclude<1 | 2 | 3, 1 | 2 | 3 | 4>

//展开后
type AExtractB = Extract<1 | 2 | 3, 1 | 2 | 4>; // 1 | 2
type _AExtractB =
  | (1 extends 1 | 2 | 4 ? 1 : never)
  | (2 extends 1 | 2 | 4 ? 2 : never)
  | (3 extends 1 | 2 | 4 ? 3 : never)

//Concurrence / Complement
type Tmp12 = Concurrence<{ name: 'leo', age: 18 }, { male: true, age: 20 }>
type Tmp13 = Complement<{ name: 'leo', age: 18 }, { name: 'leo', male: true, age: 18 }>
// type Tmp14 =  { name: 'leo', male: true, age: 18 } extends { name: 'leo', age: 18 } ? 1 : 2  // 1
//A 相对于 B 的差集 + B = 完整的集合 A 即差集1｜3 + B(2) = A(1 | 2 | 3)
type Tmp15 = Complement<1 | 2 | 3, 2>

//本质是差集也可以使用Exclude实现
type _NonNullable<T> = T extends null | undefined ? never : T;
type Tmp16 = _NonNullable<string | boolean | null>
type Tmp17 = Exclude<string | boolean | null, null | undefined>


type _Omit<T, K extends keyof any> = _Pick<T, _Exclude<keyof T, K>>


type FunctionType = (...args: any) => any;
type _Parameters<T extends FunctionType> = T extends (...arg: infer P) => any ? P : never
type _ReturnType<T extends FunctionType> = T extends (...arg: any) => infer R ? R : never
type _FirstParameter<T extends FunctionType> = T extends (arg: infer P, ...args: any) => any ? P : never
type FirstArrayItemType<T extends any[]> = T extends [infer P extends string, ...infer rest] ? P : never
type Res1 = FirstArrayItemType<[1, 'leo']>
type Res2 = FirstArrayItemType<['leo', 1]>
type Res3 = _Parameters<(a: string, b: boolean, c: { name: string, age: number }) => {}>
type Res4 = Res3 extends [...infer R, infer L] ? R : never
type Res5 = Res3 extends [...any[], infer L] ? L : never
type Res6 = Res3 extends [...infer F, infer L2, infer L] ? L2 : never
type ClassType = abstract new (...args: any) => any;