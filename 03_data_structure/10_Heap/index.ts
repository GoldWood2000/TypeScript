import { btPrint } from 'hy-algokit';

class Node<T> {
  left: Node<T> | null = null
  right: Node<T> | null = null
  value: T | null = null

  constructor(v: T) {
    this.value = v
  }
}
//完全二叉树
class completeBinaryTree<T> {
  private root: Node<T> | null = null

  insert(value: T) {
    const node = new Node(value)
    if (!this.root) {
      this.root = node
    } else {
      let queue = [this.root]
      while (queue.length !== 0) {
        const currentNode = queue.shift()
        if (!currentNode!.left) {
          currentNode!.left = node
          break;
        }
        if (!currentNode!.right) {
          currentNode!.right = node
          break;
        }
        currentNode!.left && queue.push(currentNode!.left)
        currentNode!.right && queue.push(currentNode!.right)
      }
    }
  }

  getRoot() {
    return this.root
  }
}

class Heap<T> {
  private data: T[] = []
  private length: number = 0

  private swap(i: number, j: number) {
    const v = this.data[j]
    this.data[j] = this.data[i]
    this.data[i] = v
  }

  //上浮
  private heap_up() {
    let newIndex = this.data.length - 1

    while (newIndex > 0) {

      //父节点 Math.floor((i - 1) / 2)
      let parentIndex = Math.floor((newIndex - 1) / 2)

      if (this.data[newIndex] <= this.data[parentIndex]) {
        break;
      }

      this.swap(newIndex, parentIndex)
      newIndex = parentIndex
    }
  }

  //下沉
  private heap_down(start: number) {
    let index = start

    while (index * 2 + 1 < this.length) {
      //左子节点 2i + 1
      //右子节点 2i + 2
      let leftChidIndex = (index * 2) + 1
      let rightChidIndex = (index * 2) + 2

      //因为有可能不存在右子节点（当数组长度为3时），当任何数和undefined比较时，都会返回false，也就是rightChidIndex， 所以这里需要三元表达式
      //1>undefined将 undefined 转换为 NaN，并且您无法将数字与 Not a Number 进行比较，因此任何比较都将返回false >、<等==, https://stackoverflow.com/questions/52908932/why-1-undefined-evaluates-to-false
      let largreIndex = this.data[leftChidIndex] > (this.data[rightChidIndex] ? this.data[rightChidIndex] : 0) ? leftChidIndex : rightChidIndex
      // let largreIndex = leftChidIndex
      // if (rightChidIndex < this.length && this.data[rightChidIndex] > this.data[leftChidIndex]) {
      //   largreIndex = rightChidIndex
      // }

      if (this.data[index] >= this.data[largreIndex]) {
        break
      }

      this.swap(index, largreIndex)
      index = largreIndex
    }
  }

  insert(value: T) {
    this.data.push(value)
    this.length++
    this.heap_up()
  }

  extract() {
    if (this.length === 0) return undefined
    if (this.length === 1) {
      this.length--
      return this.data.pop()!
    }

    const topValue = this.data[0]
    this.data[0] = this.data.pop()!
    this.length--
    this.heap_down(0)
    return topValue
  }

  peek() {
    console.log(this.data);

    // return this.data[0]
  }

  buildHeap(arr: T[]) {
    this.data = arr
    this.length = arr.length
    let start = Math.floor((this.length - 1) / 2)

    for (let i = start; i >= 0; i--) {
      this.heap_down(i)
    }
  }

  print() {
    const BT = new completeBinaryTree()
    this.data.forEach(item => BT.insert(item))
    btPrint(BT.getRoot())
  }
}





// const maxheap = new Heap()
// maxheap.insert(19)
// maxheap.insert(100)
// maxheap.insert(36)
// maxheap.insert(17)
// maxheap.insert(3)
// maxheap.insert(25)
// maxheap.insert(1)
// maxheap.insert(2)
// maxheap.insert(7)
// maxheap.print()

// console.log(maxheap.peek());
// console.log(maxheap.extract());
// maxheap.print()
// console.log(maxheap.extract());
// maxheap.print()
// console.log(maxheap.extract());
// maxheap.print()
// console.log(maxheap.extract());
// maxheap.print()
// console.log(maxheap.extract());
// maxheap.print()
// console.log(maxheap.extract());
// maxheap.print()
// console.log(maxheap.extract());
// maxheap.print()
// console.log(maxheap.extract());
// maxheap.print()
// console.log(maxheap.extract());
// maxheap.print()

// const arr = [9, 11, 20, 56, 23, 45]
// maxheap.buildHeap(arr)
// console.log(arr);
// maxheap.print()



export { Heap }