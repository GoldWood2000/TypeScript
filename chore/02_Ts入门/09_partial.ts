interface Person {
  name: string;
  age: number;
  gender: string;
}
//type Partial<T> = { [P in keyof T]?: T[P]; }      所有字段都变成可选的
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// }
function fooPartial(arg: Partial<Person>) {
  console.log(arg);
}
function fooRequired(arg: Required<Person>) {
  console.log(arg);
}

fooPartial({ name: 'leo' })
fooRequired({ name: 'leo', age: 15, gender: 'male' })


function bar<T extends keyof Person>(arg: T) {
  console.log(arg);
}
bar('age')

type a = {
  // [parmas in number | string] : string
  [parmas in keyof Person]: string
}

let b: a = {
  name: '1',
  age: '2',
  gender: '3'
}


export { }