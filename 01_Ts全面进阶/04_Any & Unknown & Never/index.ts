let unkonwVar: unknown = 'leo'
unkonwVar = false
unkonwVar = () => { }
unkonwVar = 18

//Type 'unknown' is not assignable to type 'string'.
// let Var1: string = unkonwVar

let Var2: unknown = unkonwVar
let Var3: any = unkonwVar
let Var4 = unkonwVar


type UnionWithNever = "linbudu" | 599 | true | void | never;


const str: string = "linbudu";
(<{ handler: () => {} }>(<unknown>str)).handler()


interface IStruct {
  foo: string;
  bar: {
    barPropA: string;
    barPropB: number;
    barMethod: () => void;
    baz: {
      handler: () => Promise<void>;
    };
  };
}

//<>类型断言 只想实现其中部分
const obj = <IStruct>{
  bar: {
    baz: {
      handler() { }
    }
  }
}
obj.foo
const obj1 = {}
const a = obj1 as IStruct
a.bar


export { }