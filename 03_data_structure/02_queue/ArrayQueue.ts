import IQueue from './IQueue';

export default class ArrayQueue<T> implements IQueue<T> {
  private queue: T[] = []

  enqueue(element: T) {
    this.queue.push(element)
  }

  dequque() {
    return this.queue.shift()
  }

  peek() {
    return this.queue[0] as T | undefined
  }

  isEmpty() {
    return this.queue.length === 0
  }

  size() {
    return this.queue.length
  }
}