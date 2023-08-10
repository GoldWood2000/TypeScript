interface PaintOptions {
  shape: {

  };
  xPos?: number;
  yPos?: number;
}

function paintShape({ shape, xPos = 0, yPos = 0 }: PaintOptions) {
  console.log("x coordinate at", xPos); // (parameter) xPos: number
  console.log("y coordinate at", yPos); // (parameter) yPos: number
  // ...
}
paintShape({ shape: {}, xPos: 1, })

//在对象解构中shape: Shape相当于将shape赋值给局部变量Shape，xPos同样， Shape并不是一个类型
function draw({ shape: Shape, xPos: number = 100 /*...*/ }: PaintOptions) {
  console.log(Shape);
  console.log(number);
}
draw({ shape: { name: 'leo' }, })


interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};

// works
let readonlyPerson: ReadonlyPerson = writablePerson;
console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'

interface NumberDictionary {
  '1': 'leo',
  2: 'dicaprio'
  [T: string]: string;
}
//当使用一个数字进行索引的时候，JavaScript 实际上把它转成了一个字符串
const dictionary: NumberDictionary = {
  1: 'leo',
  2: 'dicaprio',
  3: 'ck',
  'leo': 'dicaprio'
}


interface Colorful {
  color: string;
}

// color为never 取得是string和number的交集
type ColorfulSub = Colorful & {
  color: number,
  read: boolean
}

type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];
const a: StringNumberBooleans = ["hello", 1];
const b: StringNumberBooleans = ["beautiful", 2, true];
const c: StringNumberBooleans = ["world", 3, true, false, true, false, true];

console.log(a.length); // (property) length: number


// let point = [3, 4] as const;

// function distanceFromOrigin([x, y]: [number, number]) {
//   return Math.sqrt(x ** 2 + y ** 2);
// }

// distanceFromOrigin(point);
