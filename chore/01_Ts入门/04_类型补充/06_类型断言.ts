// as 将宽泛的一种类型转为一种具体的类型
const img = document.getElementById('#my-img') as HTMLImageElement
img.src = ''


class Person {
  eat() {
    console.log('eat');
  }
}

class Student extends Person {

}


function foo(person: Person) {
  (person as Person).eat()
}


const stu = new Student();
foo(stu)

type ain = number | string | boolean
let bin: ain = ''
if (typeof bin === 'number') {
  (bin as number).toFixed()
}

let cin: number = 1
const din: string = (cin as any) as string



export { }