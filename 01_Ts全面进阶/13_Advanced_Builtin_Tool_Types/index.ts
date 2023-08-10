type DeepPartial<T extends object> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
};




type NestedKeyOf<T extends object> = {
  [Key in keyof T & (string | number)]: T[Key] extends object
  ? `${Key}` | `${Key}.${NestedKeyOf<T[Key]>}`
  : `${Key}`
}[keyof T & (string | number)];




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
type a = {
  name: string,
  identity: {
    id: number,
    student: boolean,
  }
} & {
  age?: number,
  identity: {
    home?: {
      parent: string,
      pet: number,
      doSomething: () => void
    }
  }
}
const b: a = {
  name: '',
  identity: {
    id: 1,
    student: true,
  }
}
type Required<T extends object> = {

}
type Optional<T> = {

}
type DeepPartialWithKey<T extends object, K extends NestedKeyOf<T>> = Required<T> & Optional<T>




type Enmuerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
  ? Acc[number]
  : Enmuerate<N, [...Acc, Acc['length']]>

type IntRange<T extends number, A extends number> = Exclude<Enmuerate<A>, Enmuerate<T>>




type NonNullable<T> = T extends null | undefined ? never : T
type DeepNonNullable<T extends object> = {
  [Key in keyof T]: T[Key] extends object
  ? DeepNonNullable<T[Key]>
  : NonNullable<T[Key]>
}



type Nullbale<T> = T | null
type DeepNullbale<T extends object> = {
  [Key in keyof T]: T[Key] extends object
  ? DeepNonNullable<T[Key]>
  : Nullbale<T[Key]>
}



type Flatten<T> = { [K in keyof T]: T[K] };
type MarkPropsAsOptional<T extends object, K extends keyof T = keyof T> = Flatten<Partial<Pick<T, K>> & Omit<T, K>>




type FuncStruct = (...any: any[]) => any
type ExpectedPropKeys<T, ValueType> = {
  [Key in keyof T]-?: T[Key] extends ValueType ? Key : never
}[keyof T]
type FunctionKeys<T> = ExpectedPropKeys<T, FuncStruct>

type PickByValueType<T, ValueType> = Pick<T, StrictValueTypeFilter<T, ValueType, true>>


type FilteredPropKeys<T, ValueType> = {
  [Key in keyof T]-?: T[Key] extends ValueType ? never : Key
}[keyof T]
type OmitByValueType<T, ValueType> = Pick<T, StrictValueTypeFilter<T, ValueType, false>>


type Conditional<Value, Condition, Resolved, Rejected> = Value extends Condition
  ? Resolved
  : Rejected;

type StrictValueTypeFilter<T, ValueType, Positive extends boolean = true> = {
  [Key in keyof T]-?: StrictConditional<
    T[Key],
    ValueType,
    Conditional<Positive, true, Key, never>,
    Conditional<Positive, true, never, Key>,
    Conditional<Positive, true, never, Key>
  >
}[keyof T]

// type d1<T, V> = T[] extends V[] ? 1 : 2
// type d2 = d1<1 | 2, 1 | 2 | 3>
//处理联合类型分布式特性，判断其两边全等性（如上）1 | 2 一定是 1 | 2 | 3 子类型即成立，但是根据全等性其实不相等（少了3）,
//即两边互相对比验证全等性
type StrictConditional<A, B, Resolved, Rejected, Fallback = never> =
  [A] extends [B]
  ? [B] extends [A]
  ? Resolved
  : Rejected
  : Fallback



//互斥
interface VIP {
  vipExpires: number;
}

interface CommonUser {
  promotionUsed: boolean;
}

type VIPOrCommonUserXOR = { promotionUsed: number; vipExpires?: never; } | { vipExpires: number; promotionUsed?: never; }
const Res1: VIPOrCommonUserXOR = {
  vipExpires: 1
}
const Res2: VIPOrCommonUserXOR = {
  promotionUsed: 2
}

type Without<T, U> = { [K in Exclude<keyof T, keyof U>]?: never }
type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T)

const Res3: XOR<VIP, CommonUser> = {
  promotionUsed: true
}
const Res4: XOR<VIP, CommonUser> = {
  vipExpires: 1
}





export {
  DeepPartial,
  NestedKeyOf,
  // DeepPartialWithKey,
  Enmuerate,
  IntRange,
  NonNullable,
  DeepNonNullable,
  Nullbale,
  DeepNullbale,
  MarkPropsAsOptional,
  FunctionKeys,
  StrictValueTypeFilter,
  PickByValueType,
  OmitByValueType,
  XOR
}
