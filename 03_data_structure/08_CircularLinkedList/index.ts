class Node<T> {
  value: T
  next: Node<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}

class CircularLinkedList<T> {
  private header: Node<T> | null = null
  private size: number = 0

  private getNode(position: number) {
    let i = 0
    let current = this.header

    while (position !== i) {
      current = current!.next
      i++
    }

    return current
  }

  append(value: T) {
    if (!this.header) {
      this.header = new Node(value)
      this.header.next = this.header
      this.size++
      return
    }

    let current = this.header
    let node = new Node(value)

    while (current.next !== this.header) {
      current = current.next!
    }

    current.next = node
    node.next = this.header
    this.size++
  }

  traverse(cb: (v: T) => void) {
    if (!this.header) return

    const log: Node<T>[] = []

    const queue: Node<T>[] = [this.header]
    while (queue.length !== 0) {
      const node = queue.shift()!
      cb(node.value)
      log.push(node)
      if (node.next === this.header) break
      queue.push(node.next!)
    }

    console.log(log.map(node => node.value).join(' -> '));
  }

  insert(position: number, value: T) {
    if (position < 0 || position > this.size - 1) return

    let newNode = new Node(value)

    if (position === 0) {
      newNode.next = this.header
      this.header = newNode
      this.size++
      this.getNode(this.size - 1)!.next = this.header
      return
    }

    const node = this.getNode(position - 1)!
    newNode.next = node.next
    node.next = newNode
    this.size++
  }

  removeAt(position: number) {
    if (position < 0 || position > this.size - 1) return

    if (position === 0) {
      this.header = this.size === 1 ? null : this.header!.next
      this.size--
      this.header && (this.getNode(this.size - 1)!.next = this.header)
      return
    }

    const node = this.getNode(position - 1)!
    node.next = node.next!.next
    this.size--
  }

  indexOf(value: T) {
    if (!this.header) return -1

    // if (this.size === 1) {
    //   return this.header.value === value ? 0 : -1
    // }

    // let current = this.header
    // let i = 0
    // while (current.next !== this.header) {
    //   if (current.value === value) return i
    //   i++
    //   current = current.next!
    // }

    // return current.value === value ? i : -1

    const queue: Node<T>[] = [this.header]
    let i = 0

    while (queue.length !== 0) {
      const node = queue.shift()!
      if (node.value === value) return i
      i++
      node.next !== this.header && queue.push(node.next!)
    }

    return -1
  }
}



const circularLinklist = new CircularLinkedList()
circularLinklist.append('A')
circularLinklist.append('B')
circularLinklist.append('C')
circularLinklist.append('D')
circularLinklist.append('E')
circularLinklist.append('F')
circularLinklist.insert(3, 'H')
circularLinklist.insert(0, 'I')
circularLinklist.traverse(() => { })



const circularLinklist2 = new CircularLinkedList()
circularLinklist2.append('AA')
circularLinklist2.insert(0, 'BB')
circularLinklist2.insert(1, 'CC')
circularLinklist2.insert(2, 'DD')
circularLinklist2.insert(3, 'EE')
circularLinklist2.insert(2, 'FF')
circularLinklist2.traverse(() => { })

circularLinklist2.removeAt(0)
circularLinklist2.traverse(() => { })

circularLinklist2.removeAt(1)
circularLinklist2.traverse(() => { })

circularLinklist2.removeAt(3)
circularLinklist2.traverse(() => { })

circularLinklist2.removeAt(0)
circularLinklist2.traverse(() => { })

circularLinklist2.removeAt(1)
circularLinklist2.traverse(() => { })

circularLinklist2.removeAt(0)
circularLinklist2.traverse(() => { })

console.log(circularLinklist.indexOf('C'));
console.log(circularLinklist.indexOf('F'));
console.log(circularLinklist.indexOf('E'));
console.log(circularLinklist.indexOf('I'));
console.log(circularLinklist.indexOf('X'));


export { }