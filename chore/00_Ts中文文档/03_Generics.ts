function loggingIdentity<T>(arg: T[]) {
  console.log(arg.length);
  return arg
}

const myIdentity: <T>(a: T) => T = <T>(arg: T) => {
  return arg
}

class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}

function create<Type>(c: { new(): Type }): Type {
  return new c();
}
class leo {
  constructor() {

  }
}
create(leo)


class BeeKeeper {
  hasMask: boolean = true;
}

class ZooKeeper {
  nametag: string = "Mikle";
}

class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;


const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
  { name: "Eve", age: 38, male: true },
  [1, 2, 3]
];

type Person = typeof MyArray[number];

const APP = ['TaoBao', 'Tmall', 'Alipay'] as const;
type app = typeof APP[number]


type Flatten<T> = T extends any[] ? T[number] : T;
type FT = Flatten<[1, 2, 3, '4', {}]>
