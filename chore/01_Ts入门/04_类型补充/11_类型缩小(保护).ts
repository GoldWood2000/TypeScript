//typeof switch
type IDType = number | string;
function printId(id: IDType) {
  typeof id === "string" && id.toUpperCase();

  switch (typeof id) {
    case "string":
      console.log(id.toUpperCase());
      break;
    case "number":
      console.log(id.toFixed());
  }
}

//instanceof
class Student {
  studying() {
    console.log("studying");
  }
}

class Teacher {
  reading() {
    console.log("reading");
  }
}

function work(p: Student | Teacher) {
  p instanceof Student && p.studying();
}

const s = new Student();
work(s);

//in 如果指定的属性在指定的对象或其原型链中，则in 运算符返回true。
type cat = {
  miao: () => void;
};
type dog = {
  wang: () => void;
};

function animals(a: cat | dog) {
  "miao" in a && a.miao();
}

const foo: cat = {
  miao: () => {
    console.log("miao");
  },
};
animals(foo);

// 一个对象类型不具有可变性
type z = {
  name: string;
  age: number;
};
const haz: z = { name: "leo", age: 18 };
function bar(obj: z) {
  console.log(obj.name);
}
bar(haz);

export {};
