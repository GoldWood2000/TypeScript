//结构化类型， 又称为Duck Typing 鸭子类型
class Cat {
  eat() {

  }
}

class Dog {
  eat() {

  }
}

function feedCat(obj: Cat) {

}

feedCat(new Cat())
feedCat(new Dog())
feedCat({ eat() { } })


//标称类型  类型的重要意义之一是限制了数据的可用操作与实际意义
// type USD = number
// type CNY = number
// const CNYCount: CNY = 200
// const USDCount: USD = 200
// function addCNY(source: CNY, input: CNY) {
//   return source + input
// }
// addCNY(CNYCount, USDCount)



class TagProtector<T extends string> {
  protected __tag__: T
}
type Nominal<T, U extends string> = T & TagProtector<U>

type CNY = Nominal<number, 'CNY'>;
type USD = Nominal<number, 'USD'>;

const CNYCount = 100 as CNY;

const USDCount = 100 as USD;

function addCNY(source: CNY, input: CNY) {
  return (source + input) as CNY;
}

addCNY(CNYCount, CNYCount);

// 报错了！
// addCNY(CNYCount, USDCount);


export { }