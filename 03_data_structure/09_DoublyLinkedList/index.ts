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

  }

  removeAt(value: T, position: number) {

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




export default {}