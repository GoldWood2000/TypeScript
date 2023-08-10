// 仅在关闭 strictNullChecks 时成立，
// const temp1: string = null
// const temp2: string = undefined

//void
//因为在类型层面 func1、func2、func3 都表示“没有返回一个有意义的值”
//js层面来看 函数的执行返回的都是 undefined ， 在类型层面都表示“没有返回一个有意义的值”
function fn1() {

}

function fn2() {
  return;
}

function fn3(): void {
  return undefined
}

let fn4 = (): void => {
  return undefined
}
//仅在关闭 strictNullChecks 时成立，
// fn4 = undefined
// let fn5: void = null


//数组的类型标注 Tuple帮助数组结构的严谨性
const arr1: string[] = ['leo', 'ck']
console.log(arr1[2]);

const arr2: [string, number] = ['leo', 18]
//元组类型在超出长度会报错
// console.log(arr2[2]); 
// string? 后面在跟 string | undefined 会报错 ,因为 必需元素不能跟在可选元素之后，即使string | undefined 也不行
//readonly [string | undefined, number?, string?] 实际上变成了 ReadonlyArray，而不再是 Array
const arr3: [string | undefined, number?, string?] = ['leo', 18, 'ck']
arr3[0] = undefined
arr3[2] = undefined

type TupleLength = typeof arr3.length
const Tuple: TupleLength = 1

// ts 4.0（Labeled Tuple Elements） 具名元组
const arr4: [name: string, age: number] = ['leo', 18]


//数组解构 隐式地越界访问 ele1推导出来为string类型，但是赋值的数组数据为空， 使用Tuple解决,隐式的越界访问也能够被揪出来给一个警告
const arr5: string[] = []
const [ele1, ele2, ...rest] = arr5
console.log('ele1:', ele1);
console.log('rest:', rest);

const arr6: [string, number, boolean] = ['leo', 18, true]
// Tuple type '[string, number, boolean]' of length '3' has no element at index '3'.
// const [ele3, ele4, ele5, other] = arr6
const [ele3, ele4, ele5, ...other] = arr6


//对象的类型标注
interface IDescription {
  name: string,
  age: number,
  male?: boolean,
  fn?: Function
}

const obj1: IDescription = {
  name: 'leo',
  age: 18,
  fn: () => {
    console.log('! 非空断言 判断执行');
  }
}
obj1.male = true
obj1.fn = () => {
  console.log('obj1 fn excute');
}
obj1.fn()

obj1.fn && obj1.fn()
obj1.fn!()


//在 TypeScript 中就表现为 Object 包含了所有的类型  对于 undefined、null、void 0 ，需要关闭 strictNullChecks
// const obj2: Object = undefined
// const obj3: Object = null
const obj4: Object = 4
const obj5: Object = true
const obj6: Object = {}
const obj7: Object = () => { }
//在任何情况下，你都不应该使用这些装箱类型
//装箱类型（Boxed Types） Object、Boolean、Number、String、Symbol 以 String 为例，它同样包括 undefined、null、void 不应该使用
// const obj8: String = undefined //需要关闭 strictNullChecks


//object它代表所有`非原始类型`的类型，即数组、对象与函数类型这些：
const obj8: object = []
const obj9: object = {}
const obj10: object = () => { }

const obj11: object = { name: 'leo', age: 18 }
console.log(obj11)

type obj12 = {
  name: string,
  age: number,
  male: boolean
}
const obj13: [obj12] = [{ name: "1", age: 12, male: true }]

type obj14 = obj12[]
const obj15: obj14 = [{ name: "1", age: 12, male: true }, { name: "2", age: 13, male: false }]

