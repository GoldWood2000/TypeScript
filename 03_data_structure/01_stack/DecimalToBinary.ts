import ArrayStack from './ArrayStack';

const DecimalToBinary = (decimal: number) => {
  return decimal % 2 === 0 ? 0 : 1
}

const arrayStack = new ArrayStack<number>()


const calculate = (num: number) => {
  const divisor = num / 2

  if (divisor > 0 && divisor < 1) {
    arrayStack.push(DecimalToBinary(num))
    return
  }

  arrayStack.push(DecimalToBinary(num))
  calculate(Number.parseInt(`${divisor}`))
}

//35 -> 100011
calculate(35)
console.log(arrayStack.pop());
console.log(arrayStack.pop());
console.log(arrayStack.pop());
console.log(arrayStack.pop());
console.log(arrayStack.pop());
console.log(arrayStack.pop());
console.log(arrayStack.pop());


const DecToBin = (decimal: number) => {
  const stack = new ArrayStack()

  while (decimal > 0) {
    stack.push(decimal % 2)
    decimal = Math.floor(decimal / 2)
  }

  let binary = ''
  while (!stack.isEmpty()) {
    binary += stack.pop()
  }

  return binary
}

console.log(DecToBin(35));

