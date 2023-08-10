
type Include<Str extends string, Search extends string> = Str extends `${infer _R1}${Search}${infer _R3}` ? `${_R1}` : false

type IncludeRes1 = Include<'linbudu', 'lin'>

type Include2<Str extends string, Search extends string> = Str extends `${infer _R1}${infer _R2}${infer _R3}` ? `${_R1}` | `${_R2}` | `${_R3}` : false

type IncludeRes2 = Include2<'linbudu', 'lin'>

interface A {
  age: number
}
interface D extends A {
  wang: () => void
}
let ResD: D = {
  age: 1,
  wang: () => {

  },
}
let ResA: A = {
  age: 2
}
ResA = ResD
type Res<A, B> = A extends B ? true : false
type Res1 = Res<A, D>
type Res2 = Res<D, A>
type Res3 = Res<{ name: string, age: number }, { age: number }>
type Res4 = Res<'linbudu', 'lin'>
type Res5 = Res<'lin', 'linbudu'>
type Res6 = 'linbudu' extends 'lin' ? true : false
type Res7 = { name: string, age: number } extends { name: string } ? true : false
type Res8 = [1, 2, 3]
type Res9 = Res8['length']

export { }