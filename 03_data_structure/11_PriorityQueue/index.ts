import { Heap } from '../10_Heap/index';

class PriorityNode<T> {
  priority: number
  value: T

  constructor(value: T, priority: number) {
    this.priority = priority
    this.value = value
  }

  valueOf() {
    return this.priority
  }
}

class PriortyQueue<T> {
  private heap: Heap<PriorityNode<T>> = new Heap()

  enqueue(value: T, priority: number) {
    const node = new PriorityNode(value, priority)
    this.heap.insert(node)
  }

  dequeue() {
    return this.heap.extract()?.value
  }
}

const pNode = new PriortyQueue()
pNode.enqueue('foo', 98)
pNode.enqueue('bar', 90)
pNode.enqueue('leo', 105)

console.log(pNode.dequeue());
console.log(pNode.dequeue());
console.log(pNode.dequeue());


export { }