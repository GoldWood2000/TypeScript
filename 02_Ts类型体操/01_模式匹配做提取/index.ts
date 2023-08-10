type PopAr<Arr> = Arr extends [] ? [] : Arr extends [...infer Rest, unknown] ? Rest : never
type PopRes = PopAr<[1, 2, 3, 4]>


type StartWith<Str extends string, Prefix extends string> = Str extends `${Prefix}${string}` ? true : false
type StrRes = StartWith<'leodicaprio', 'leo'>
type StrRes2 = StartWith<'leodicaprio', 'e'>


type ReplaceStr<Str extends string, Form extends string, To extends string> =
  Str extends `${infer Prefix}${Form}${infer Suffix}`
  ? `${Prefix}${To}${Suffix}`
  : Str
type ReplaceStrRes = ReplaceStr<'leodicaprio', 'leo', 'ck'>
type ReplaceStrRes2 = ReplaceStr<'leodicaprio', 'dicaprio', 'ck'>


type TrimRight<Str extends string> = Str extends `${infer S} ` ? TrimRight<S> : Str
type TrimRightRes = TrimRight<'leo '>
type TrimRightRes2 = TrimRight<'leo        '>


type GetParameters<F extends Function> = F extends (...args: infer Args) => unknown ? Args : never
type GetParametersRes = GetParameters<(name: string, age: number) => void>

type GetReturnType<Func extends Function> = Func extends (...args: any[]) => infer ReturnType ? ReturnType : never;
type GetReturnTypeRes = GetReturnType<() => 'leo'>


class Leo {
  name: string;

  constructor() {
    this.name = 'leo'
  }

  hello(this: Leo) {
    return 'hello I\'m ' + this.name
  }
}

const leoRes = new Leo()
// leoRes.hello.call({ age: 18 })

type GetThisParameterType<T extends Function> = T extends (this: infer ThisArg, ...args: any[]) => unknown ? ThisArg : never
type GetThisParameterTypeRes = GetThisParameterType<typeof leoRes.hello>

export { }