type And<A extends boolean, B extends boolean> = [A, B] extends [true, true] ? true : false
type Not<T extends boolean> = T extends true ? false : true

type Extends<A, B> = A extends B ? true : false

type IsStringLiteral<T> = false // type definition omitted and set to `false` (bug still appears)

type IsNumberLiteral<T> =
  And<
    Extends<T, number>, //false
    Not<Extends<number, T>> //true
  > //false

type Or<A extends boolean, B extends boolean> = [A, B] extends [false, false] ? false : true

// ?????
type IsLiteral<T> = Or<IsStringLiteral<T>, IsNumberLiteral<T>>
//   ^?

type T = string
type il = IsLiteral<T> //true Is BUG
//   ^?

/// the constituent parts work correctly

type a = IsStringLiteral<T>
//   ^?
type b = IsNumberLiteral<T>
//   ^?

type c = Or<IsStringLiteral<T>, IsNumberLiteral<T>>
//   ^?

type d = [IsStringLiteral<T>, IsNumberLiteral<T>] extends [false, false] ? false : true
//   ^?



/// looking at some other Or implementations

type Or0<A, B> =
  A extends true ? true
  : B extends true ? true
  : false

type IsLiteral0<T> = Or0<IsStringLiteral<T>, IsNumberLiteral<T>>
//   ^?
type t0 = IsLiteral0<string>
//   ^?

type Or0b<A, B> =
  [A] extends [true] ? true
  : [B] extends [true] ? true
  : false

type IsLiteral0b<T> = Or0b<IsStringLiteral<T>, IsNumberLiteral<T>>
//   ^?
type t0b = IsLiteral0b<string>
//   ^?

type Or1<A, B> =
  [A, B] extends [true, true] ? true
  : [A, B] extends [true, false] ? true
  : [A, B] extends [false, true] ? true
  : false

type IsLiteral1<T> = Or1<IsStringLiteral<T>, IsNumberLiteral<T>>
//   ^?
type t1 = IsLiteral1<string>
//   ^?

type Or2<A, B> =
  A extends false
  ? B extends false
  ? false
  : true
  : true

type IsLiteral2<T> = Or2<IsStringLiteral<T>, IsNumberLiteral<T>>
//   ^?
type t2 = IsLiteral2<string>
//   ^?

type Or2b<A, B> =
  [A] extends [false]
  ? [B] extends [false]
  ? false
  : true
  : true

type IsLiteral2b<T> = Or2b<IsStringLiteral<T>, IsNumberLiteral<T>>
//   ^?
type t2b = IsLiteral2b<string>
//   ^?
