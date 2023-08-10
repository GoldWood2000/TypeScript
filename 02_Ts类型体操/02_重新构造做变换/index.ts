type Zip<One extends unknown[], Other extends unknown[]> =
  One extends [infer OneFirst, ...infer OneRest]
  ? Other extends [infer OtherFirst, ...infer OtherRest]
  ? [[OneFirst, OtherFirst], ...Zip<OneRest, OtherRest>]
  : [] : []

type ZipResult = Zip<[1, 2, 3, 4, 5], ['guang', 'dong', 'is', 'best', 'friend']>;


type CamelCase<Str extends string> =
  Str extends `${infer Left}_${infer Last}${infer Rest}`
  ? `${Left}${Capitalize<Last>}${CamelCase<Rest>}` : Str

type CamelCaseRes = CamelCase<'leo_leo_leo'>


type DropSubStr<Str extends string, SubStr extends string> =
  Str extends `${infer Prefix}${SubStr}${infer Suffix}`
  ? DropSubStr<`${Prefix}${Suffix}`, SubStr> : Str

type DropSubStrRes = DropSubStr<'leo_leo_leo', '_'>



type AppendArgument<T extends Function, AppedType> =
  T extends (...args: infer Arg) => infer R
  ? (...args: [...Arg, AppedType]) => R : T

type AppendArgumentRes = AppendArgument<(name: string) => number, number>

// type F = (...[number, string, boolean]) => number
type F = (...arg: [number, string, boolean]) => number
const FRes: F = (age, name, male) => {
  return 1
}

type obj = {
  name: string;
  age: number;
  gender: boolean;
}

type UppercaseKey<Obj extends Record<string, any>> = {
  [Key in keyof Obj as Uppercase<Key & string>]: Obj[Key]
}

type UppercaseKeyRes = UppercaseKey<obj>

type FilterByValueType<T extends Record<string, any>, ValueType> = {
  [Key in keyof T as T[Key] extends ValueType ? Key : never]: T[Key]
}
type FilterByValueTypeRes = FilterByValueType<obj, string | number>

type Sign = {
  [K: string]: any
}

const a: Sign = {
  1: 2,
  [Symbol(1)]: 2
}

export { }