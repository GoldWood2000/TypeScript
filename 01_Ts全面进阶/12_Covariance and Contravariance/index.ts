class Animal {
  asPet() { }
}

class Dog extends Animal {
  bark() { }
}

class Corgi extends Dog {
  cute() { }
}

function makeDogBark(dog: Dog) {
  dog.bark();
}

makeDogBark(new Corgi());
// makeDogBark(new Animal());

type AnimalFactory = (args: Animal) => Animal;
type AnimalReturnDogFactory = (args: Animal) => Dog;
type AnimalReturnCorgiFactory = (args: Animal) => Corgi;

type DogFactory = (args: Dog) => Dog;
type DogReturnAnimalFactory = (args: Dog) => Animal;
type DogReturnCorgiFactory = (args: Dog) => Corgi;

type CorgiFactory = (args: Corgi) => Corgi;
type CorgiReturnAnimalFactory = (args: Corgi) => Animal;
type CorgiReturnDogFactory = (args: Corgi) => Dog;

function transformDogAndBark(dogFactory: DogFactory) {
  const dog = dogFactory(new Dog());
  dog.bark();
}

interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
  leo: '1' | '2' | '3'
}

type AddressWithUnit = BasicAddress & {
  unit: string;
  leo: '1' | '2'
}
const add: AddressWithUnit = {
  street: '',
  city: '',
  country: '',
  postalCode: '',
  unit: '',
  leo: '1'
}

//对象类型判断哪个对象包含了更多的属性谁就是子类型
//联合类型判断A中的元素是否可以都满足B中的元素， 满足A就是B的子类型
interface IAnimal {
  age: number
}

interface IDog extends IAnimal {
  bark(): void
}
let Ia: IAnimal = {
  age: 20
}
let Id: IDog = {
  age: 20,
  bark() {

  }
}
//在TS中子类型的变量是可以安全的赋值给父类型的。因为子类型的元素不但包含了父类型的元素，还具有更多的元素，因此子类型是 父 + 自己 的元素构成
//既然包含父类型元素，那肯定是可以安全赋值给父类型的，这就是协变，也类似于结构化类型
//当子类型的变量安全的赋值给父类型时，其实就发生了一次协变。或者更官方一点的说法是满足协变的
Ia = Id


interface FAnimal {
  age: number
}

interface FDog extends FAnimal {
  bark(): void
}


let animalFunc = (a: FAnimal) => {
  return a.age;
}

let dogFunc = (dog: FDog) => {
  dog.bark()
  return dog.age
}
//可以发现函数方面的赋值方向与变量完全相反，这就是逆变。父类型可以赋值给子类型
// animalFunc = dogFunc //因为把参数为Dog类型的函数赋值给参数为Animal类型的函数，也就意味着最终将会执行参数为Dog类型的函数里的内容
dogFunc = animalFunc

// animalFunc({ age:1 })
dogFunc({ age: 2, bark: () => { } })

//函数类型的参数类型使用子类型逆变的方式确定是否成立，而返回值类型使用子类型协变的方式确定
type AsFuncReturnType<T> = (arg: unknown) => T;
type AsFuncArgType<T> = (arg: T) => void;
// 1 成立：(T -> Corgi) ≼ (T -> Dog)
type CheckReturnType = AsFuncReturnType<Corgi> extends AsFuncReturnType<Dog> ? 1 : 2;
// 2 不成立：(Dog -> T) ≼ (Animal -> T)
type CheckArgType = AsFuncArgType<Dog> extends AsFuncArgType<Animal> ? 1 : 2;
type CheckArgType2 = AsFuncArgType<Animal> extends AsFuncArgType<Dog> ? 1 : 2;


const foo = (arg: (v: string) => void = (vv) => { }) => {
  arg('leo')
}
interface Person {
  name: string;
  age: number
}

interface Leo {
  name: string
  age: number
  hobbies: string[]
}
let person: Person = {
  name: '',
  age: 20
}
let leo: Leo = {
  name: 'leo',
  age: 18,
  hobbies: ['code']
}
person = leo //子类型可以赋值给父类型的情况就叫做协变

//逆变
let printHobbies: (leo: Leo) => void;

printHobbies = (leo) => {
  console.log(leo.hobbies);
}

let printName: (person: Person) => void;

printName = (person) => {
  console.log(person.name);
}

printHobbies = printName
// printName = printHobbies


//https://juejin.cn/post/7039315081150087181
interface Animal {
  name: string;
}

interface Dog extends Animal {
  wang: () => void;
}

interface Cat extends Animal {
  miao: () => void;
}

interface Comparer<T> {
  compare(a: T, b: T): number;
}

declare let animalComparer: Comparer<Animal>;
declare let dogComparer: Comparer<Dog>;

animalComparer = dogComparer;  // Ok because of bivariance
dogComparer = animalComparer;  // Ok



interface Comparer2<T> {
  compare: (a: T, b: T) => number;
}

declare let animalComparer2: Comparer2<Animal>;
declare let dogComparer2: Comparer2<Dog>;

//animalComparer2 = dogComparer2;  // Error
dogComparer2 = animalComparer2;  // Ok



export { }