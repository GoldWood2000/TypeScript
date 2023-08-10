class StackWithArray<T> {
  private stack: T[] = []

  push(value: T) {
    this.stack.push(value)
  }

  pop() {
    return this.stack[this.stack.length - 1]
  }
}

const test1 = new StackWithArray<number>()
test1.push(1)
console.log(test1.pop());
