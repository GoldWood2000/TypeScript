import { expectType } from 'tsd';
import { DeepPartial, FunctionKeys, NestedKeyOf } from '../index';

//---------------------  DeepPartial  ---------------------  
type DeepPartialStruct = DeepPartial<{
  foo: string;
  nested: {
    nestedFoo: string;
    nestedBar: {
      nestedBarFoo: string;
    };
  };
}>;

expectType<DeepPartialStruct>({
  foo: 'bar',
  nested: {},
});

expectType<DeepPartialStruct>({
  nested: {
    nestedBar: {},
  },
});

expectType<DeepPartialStruct>({
  nested: {
    nestedBar: {
      nestedBarFoo: undefined,
    },
  },
});


//---------------------  NestedKeyOf  ---------------------  
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
type ExtractDeepKeyStruct = NestedKeyOf<UserInfo>


//---------------------  FunctionKeys  ---------------------  
expectType<
  FunctionKeys<{
    foo: () => void;
    bar: () => number;
    baz: number;
  }>
>('foo');
