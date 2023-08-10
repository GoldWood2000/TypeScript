//泛型约束 extends A extends B A为B的子类型
type IsEqual<T> = T extends true ? 1 : 2

type A = IsEqual<true>
type B = IsEqual<false>
type C = IsEqual<'leo'>

type Factory<T = boolean> = T | string | number

type ResStatus<T extends number = 10002> = T extends 10001 | 10002 | 10003 ? 'success' : 'failure'
// type Res1 = ResStatus<'leo'> //Type 'string' does not satisfy the constraint 'number'.
type Res2 = ResStatus<1>
type Res3 = ResStatus<10001>
type Res4 = ResStatus


//多泛型关联
type Conditional<Type, Condition, TruthyResult, FalsyResult> = Type extends Condition ? TruthyResult : FalsyResult
type Result1 = Conditional<'leo', string, 'passed!', 'rejected!'>
type Result2 = Conditional<'leo', number, 'passed!', 'rejected!'>

type ProcessInput<
  Input,
  SecondInput extends Input = Input,
  ThirdInput extends Input = SecondInput
> = Input | SecondInput | ThirdInput

type Result3 = ProcessInput<string, 'leo', '18'>


//对象类型中的泛型
interface IRes<TData = unknown> {
  code: number,
  error?: string,
  data: TData
}

interface IPageWithData<TData = unknown> {
  pageNo: number;
  total: number;
  data: TData[]
}

interface IUserProfileRes {
  name: string,
  homepage: string,
  avatar: string
}

function fetchUserProfile(): Promise<IRes<IUserProfileRes>> {
  return Promise.resolve({
    code: 1,
    data: {
      name: 'leo',
      homepage: 'china',
      avatar: 'handsome'
    }
  })
}
function fetchUserProfileWithPage(): Promise<IRes<IPageWithData<IUserProfileRes>>> {
  return Promise.resolve({
    code: 1,
    data: {
      pageNo: 1,
      total: 18,
      data: [{
        name: 'leo',
        homepage: 'china',
        avatar: 'handsome'
      }]
    }
  })
}


//函数中的泛型
//函数的泛型是日常使用较多的一部分，更明显地体现了泛型在调用时被填充这一特性，而类型别名中，我们更多是手动传入泛型
//函数的泛型是日常使用较多的一部分，更明显地体现了泛型在调用时被填充这一特性，而类型别名中，我们更多是手动传入泛型。
//这一差异的缘由其实就是它们的场景不同，我们通常使用类型别名来对已经确定的类型结构进行类型操作，比如将一组确定的类型放置在一起。而在函数这种场景中，我们并不能确定泛型在实际运行时会被什么样的类型填充
function swap<T, U>([start, end]: [T, U], rest?: U): [U, T] {
  return [end, start]
}

swap(['leo', 18])

function handle<T extends string | number>(input: T) {
  return input
}
handle('leo')
handle(18)

const isNumber = (input: unknown): input is number => {
  return typeof input === 'number'
}
function handle2<T>(input: T) {
  if (typeof input === 'number') {
    return input * 2
  }
  return input
}
const a1 = handle2(1)

type in1<T extends 'a' | 'b'> = {
  [K in T]: string
}
type in2 = in1<'a'>
type in3 = in1<'a' | 'b'>

const leoobj = { a: 1, b: 2, c: 3 }
type _Pick<T extends object, U extends keyof T> = {
  [K in U]: T[K]
}
// function pick<T extends object, U extends keyof T>(obj: T, ...props: Array<U>): Pick<T, U> {

// }

type tPick1 = Pick<typeof leoobj, keyof typeof leoobj>
type tPick2 = _Pick<typeof leoobj, keyof typeof leoobj>
type tPick3 = _Pick<typeof leoobj, 'a' | 'b'>

type Arachnid = Omit<{ name: string, legs: 8 }, 'legs'>

export { }