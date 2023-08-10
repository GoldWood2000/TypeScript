type DeepPromise<T> = T extends Promise<infer R> ? DeepPromise<R> : T

type DeepPromiseRes = DeepPromise<Promise<Promise<Promise<Record<string, any>>>>>

type DeepPromiseValueType<T extends Promise<unknown>> =
  T extends Promise<infer ValueType>
  ? ValueType extends Promise<unknown>
  ? DeepPromiseValueType<ValueType>
  : ValueType
  : T

type DeepPromiseValueTypeRes = DeepPromiseValueType<Promise<Promise<Promise<Record<string, any>>>>>


type DeepReverseArr<T extends unknown[]> =
  T['length'] extends 0 ? [] : T extends [...infer Args, infer Last] ? [Last, ...DeepReverseArr<Args>] : []
type DeepReverseArrRes = DeepReverseArr<[1, 2, 3, 4, 5]>
type DeepReverseArrRes3 = DeepReverseArr<[1]>


type A<T> = T extends [...infer F, infer Rest] ? [F, Rest] : false
type B = A<[1]>
type C = A<[]>
type DeepReverseArr2<T extends unknown[]> = T extends [infer F, ...infer Rest] ? [...DeepReverseArr2<Rest>, F] : []
type DeepReverseArrRes2 = DeepReverseArr<[1, 2, 3, 4, 5]>




type IsEqual<A, B> = (A extends B ? true : false) & (B extends A ? true : false);

type Includes<Arr extends unknown[], FindItem> =
  Arr extends [infer First, ...infer Rest]
  ? IsEqual<First, FindItem> extends true ? true : Includes<Rest, FindItem>
  : false
type IncludesRes = Includes<[1, 2, 3, 4, 5], 3>



type RemoveItem<Arr extends unknown[], Item, Result extends unknown[] = []> =
  Arr extends [infer First, ...infer Rest]
  ? IsEqual<First, Item> extends true
  ? RemoveItem<Rest, Item, Result>
  : RemoveItem<Rest, Item, [...Result, First]>
  : Result
type RemoveItemRes = RemoveItem<[1, 2, 2, 3], 2>


type Builder<T, A extends any[] = []> = A['length'] extends T ? A : Builder<T, [unknown, ...A]>
type BuildArr<T extends number> = Builder<T>

type BuildArray<Length extends number, Ele = unknown, Arr extends unknown[] = []> =
  Arr['length'] extends Length ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>
type BuildArrayRes = BuildArray<5>
type BuildArrayRes2 = BuildArray<5, any, [1, 2]>



type ReplaceAllStr<Str extends string, From extends string, To extends string> =
  Str extends `${infer Prefix}${From}${infer Suffix}`
  ? ReplaceAllStr<`${Prefix}${To}${Suffix}`, From, To>
  : Str
type ReplaceAllStrRes = ReplaceAllStr<'leoleoleo', 'l', 'c'>
type ReplaceAllStrRes2 = ReplaceAllStr<'leoleoleo', 'e', 'c'>
type ReplaceAllStrRes3 = ReplaceAllStr<'leoleoleo', 'o', 'c'>
type ReplaceAllStrRes4 = ReplaceAllStr<'leoleoleo', 'leo', 'ck'>


type StringToUnion<Str extends string> =
  Str extends `${infer Prefix}${infer Suffix}`
  ? Prefix | StringToUnion<Suffix>
  : never
type StringToUnionRes = StringToUnion<'leo'>
type StringToUnionRes2 = StringToUnion<'dong'>


type Str<T extends string> = `${T}${never}`
type StrRes = Str<'leo'> //模版字符串中含有never返回结果必定是个never, 这也是 ReverseStr 条件不成立时不能写never的原因

type Str2<s> = s extends `${infer Left}${infer Rest}` ? Left : never
type R9 = Str2<'o'>
type Str3<s> = s extends `${infer Left}${infer Rest}` ? `left：${Left}` | Rest : never
type R10 = Str3<'o'>

type StrLength<T extends string> = T['length']
type StrLengthRes = StrLength<'leo'>  //字符串获取的长度和数组获取的长度不一致， 字符串并不会返回具体的长度值，而是一个number
type ArrLength<T extends unknown[]> = T['length']
type ArrLengthRes = ArrLength<['l', 'e', 'o']>

type ReverseStr<Str extends string> =
  Str extends `${infer Prefix}${infer Rest}`
  ? `${ReverseStr<Rest>}${Prefix}`
  : Str

type ReverseStrWithResult<Str extends string, Result extends string = ''> =
  // Str extends ''
  // ? Result
  Str extends `${infer First}${infer Rest}`
  ? ReverseStrWithResult<`${Rest}`, `${First}${Result}`>
  : Result

type ReverseStrRes = ReverseStr<'leo'>
type ReverseStrRes2 = ReverseStr<'hello'>
type ReverseStrRes3 = ReverseStrWithResult<'leo'>
type ReverseStrRes4 = ReverseStrWithResult<'hello'>




type DeepReadonly<Obj extends Record<string, any>> =
  Obj extends any ?
  {
    readonly [Key in keyof Obj]: Obj[Key] extends object
    ? Obj[Key] extends Function
    ? Obj[Key] : DeepReadonly<Obj[Key]>
    : Obj[Key]
  } : never

type DeepReadonlyRes = DeepReadonly<{
  a: {
    b: {
      c: {
        f: () => 'dong',
        d: {
          e: {
            guang: string
          }
        }
      }
    }
  }
}>


export { }