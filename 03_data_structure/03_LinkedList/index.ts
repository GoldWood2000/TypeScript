class Node<T> {
  private value: T
  next: Node<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}


class LinkedList<T> {
  private head: Node<T> | null = null
  private size: number = 0

  append(value: T) {
    const node = new Node(value)
    if (this.head === null) {
      this.head = node
      this.size++
      return
    }

    let _next: Node<T> | null = this.head

    while (_next.next !== null) {
      _next = _next.next
    }

    _next.next = node
    this.size++
  }

  get length() {
    return this.size
  }

  get link() {
    return this.head
  }
}

const link = new LinkedList<string>();
link.append('leo')
link.append('ck')
link.append('dicaprio')
console.log(link.length, link.link);


export { LinkedList }