import IStack from './IStack'

class ArrayStack<T> implements IStack<T> {
  private stack: T[] = []

  push(value: T) {
    this.stack.push(value)
  }

  pop() {
    const element = this.stack[this.stack.length - 1]
    this.stack.length = this.stack.length - 1
    return element as T | undefined
  }

  peek() {
    return this.stack[this.stack.length - 1] as T | undefined
  }

  isEmpty() {
    return this.stack.length === 0
  }

  size() {
    return this.stack.length
  }
}

const test1 = new ArrayStack<string>()
test1.push('aaa')
test1.push('bbb')
test1.push('ccc')
console.log(test1.peek());
console.log(test1.pop());
console.log(test1.pop());
console.log(test1.pop());
console.log(test1.isEmpty());
console.log(test1.size());

