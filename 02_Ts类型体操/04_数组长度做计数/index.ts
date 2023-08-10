type BuildArray<Length extends number, Ele = unknown, Arr extends unknown[] = []> =
  Arr['length'] extends Length ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>

type Add<Num1 extends number, Num2 extends number> = [...BuildArray<Num1>, ...BuildArray<Num2>]['length']
type AddRes = Add<20, 32>


type Subtract<Num1 extends number, Num2 extends number, Result extends unknown[] = []> =
  [...BuildArray<Num2>] extends 0
  ? Result['length']
  : [...BuildArray<Num1>] extends [infer First, ...infer Rest]
  ? [...BuildArray<Num2>] extends [infer First2, ...infer Rest2]
  ? Subtract<Rest['length'], Rest2['length'], Rest>
  : [First, ...Rest]['length']
  : Result['length']

type SubtractRes = Subtract<5, 3>
type SubtractRes2 = Subtract<3, 0>

type Arr<T> = [...arg: T[]]
type ArrRes = Arr<1>
type Arr2<T extends unknown[]> = [...arg: T]
type ArrRes2 = Arr2<BuildArray<5>>


type Subtract2<Num1 extends number, Num2 extends number> =
  BuildArray<Num1> extends [...arr1: BuildArray<Num2>, ...arr2: infer Rest]
  // BuildArray<Num1> extends [...BuildArray<Num2>, ...infer Rest]
  ? Rest['length']
  : never;

type SubtractRes3 = Subtract2<5, 3>
type SubtractRes4 = Subtract2<3, 0>
type SubtractRes5 = Subtract2<0, 3>


type Multiply<Num1 extends number, multiple extends number> =
  BuildArray<Num1> extends [infer First, ...infer Rest]
  ? [...BuildArray<multiple>, ...Multiply<Rest['length'], multiple>]
  : []

type MultiplyRes = Multiply<34, 2>['length']


type Mutiply<Num1 extends number, Num2 extends number, ResultArr extends unknown[] = []> =
  Num2 extends 0
  ? ResultArr['length']
  : Mutiply<Num1, Subtract2<Num2, 1>, [...BuildArray<Num1>, ...ResultArr]>


type MultiplyRes2 = Mutiply<34, 2>


type Divide<Num1 extends number, Num2 extends number, ResultArr extends unknown[] = []> =
  Num1 extends 0
  ? ResultArr['length']
  : Divide<Subtract2<Num1, Num2>, Num2, [unknown, ...ResultArr]>

type DivideRes = Divide<4, 2>


type StrLen<Str extends string, Len extends unknown[] = []> =
  Str extends `${infer First}${infer Rest}`
  ? StrLen<Rest, [...Len, First]>
  : Len

type StrlenRes = StrLen<'leo'>['length']
type StrlenRes2 = StrLen<'hello'>
type StrlenRes3 = StrLen<'hello world'>['length']


type GreaterThan<Num1 extends number, Num2 extends number> =
  Num1 extends Num2
  ? false
  : Subtract2<Num1, Num2> extends never ? false : true

type GreaterThanRes = GreaterThan<5, 4>
type GreaterThanRes2 = GreaterThan<4, 4>
type GreaterThanRes3 = GreaterThan<4, 5>


type GreaterThan2<Num1 extends number, Num2 extends number, CountArr extends unknown[] = []> =
  Num1 extends Num2
  ? false
  : CountArr['length'] extends Num2
  ? true
  : CountArr['length'] extends Num1
  ? false
  : GreaterThan2<Num1, Num2, [...CountArr, unknown]>;


type FibonacciLoop<
  PrevArr extends unknown[],
  CurrentArr extends unknown[],
  IndexArr extends unknown[] = [],
  Num extends number = 1
> = IndexArr['length'] extends Num
  ? CurrentArr['length']
  : FibonacciLoop<CurrentArr, [...PrevArr, ...CurrentArr], [...IndexArr, unknown], Num>

type Fibonacci<Num extends number> = FibonacciLoop<[1], [], [], Num>;
type FibonacciRes = Fibonacci<3>

//1、1、2、3、5、8、13、21、34

// type FibonacciLoopShow<
//   Prev extends number = 1,
//   Curr extends number = 1,
//   Num extends number = 1,
//   Result extends unknown[] = []
// > = Result['length'] extends Num
//   ? Result
//   : FibonacciLoopShow<1, 1, Num, [Curr]>


export { }