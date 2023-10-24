class Node<T> {
  value: T
  next: Node<T> | null = null
  prev: Node<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}

type Callback<T> = (v: T) => void

class DoublyLinkedList<T> {

  private head: Node<T> | null = null
  private tail: Node<T> | null = null
  private size: number = 0

  private getNode(position: number) {
    let i = 0
    let current = this.head
    while (i !== position) {
      current = current!.next
      i++
    }
    return current
  }

  append(value: T) {
    const node = new Node(value)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail!.next = node
      node.prev = this.tail
      this.tail = node
    }

    // let current = this.head
    // while (current.next !== null) {
    //   current = current.next
    // }
    // node.prev = current
    // current.next = node
    // this.tail = node
    this.size++
  }

  preppend(value: T) {
    const node = new Node(value)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }
    this.size++
  }

  traverse(cb?: Callback<T>, tail = false) {
    if (!this.head) return

    const log: T[] = []

    let current: Node<T> | null = tail ? this.tail : this.head

    while (current) {
      cb?.(current.value)
      log.push(current.value)
      current = current[tail ? 'prev' : 'next']
    }

    console.log(log.join(' -> '));
  }

  insert(value: T, position: number) {
    if (position === 0) {
      this.preppend(value)
    } else {
      const node = this.getNode(position)
      const newNode = new Node(value)
      if (node === this.tail) {
        newNode.prev = node
        node!.next = newNode
        this.tail = newNode
      } else {
        const prevNode = node!.prev
        newNode.next = node
        newNode.prev = prevNode
        node!.prev = newNode
        prevNode!.next = newNode
      }
    }
    this.size++
  }

  removeAt(position: number) {
    if (position === 0) {
      if (this.size === 1) {
        this.head = null
        this.tail = null
      } else {
        this.head!.prev = null
        this.head = this.head!.next
      }
    } else {
      const node = this.getNode(position)
      if (node === this.tail) {
        this.tail = node!.prev
        node!.prev!.next = null
        node!.prev = null
      } else {
        const prevNode = node!.prev
        const nextNode = node!.next
        nextNode!.prev = prevNode
        prevNode!.next = nextNode
      }
    }
    this.size--
  }

}

const doublylinkedlist = new DoublyLinkedList()

doublylinkedlist.append('a')
doublylinkedlist.append('b')
doublylinkedlist.append('c')
doublylinkedlist.traverse()
doublylinkedlist.traverse(undefined, true)
doublylinkedlist.preppend('d')
doublylinkedlist.preppend('e')
doublylinkedlist.preppend('f')
doublylinkedlist.preppend('h')
doublylinkedlist.traverse()
doublylinkedlist.traverse(undefined, true)
doublylinkedlist.insert('f', 0)
doublylinkedlist.traverse()
doublylinkedlist.insert('h', 7)
doublylinkedlist.traverse()
doublylinkedlist.insert('x', 1)
doublylinkedlist.traverse()
doublylinkedlist.insert('y', 1)
doublylinkedlist.traverse()
doublylinkedlist.insert('z', 2)
doublylinkedlist.traverse()
doublylinkedlist.removeAt(0)
doublylinkedlist.traverse()
doublylinkedlist.removeAt(10)
doublylinkedlist.traverse()
doublylinkedlist.removeAt(9)
doublylinkedlist.traverse()
doublylinkedlist.removeAt(0)
doublylinkedlist.traverse()
doublylinkedlist.removeAt(1)
doublylinkedlist.traverse()
doublylinkedlist.removeAt(2)
doublylinkedlist.traverse()
doublylinkedlist.removeAt(3)
doublylinkedlist.traverse()




export default {}