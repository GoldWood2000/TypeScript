class Node<T> {
  value: T
  next: Node<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}


class LinkedList<T> {
  private head: Node<T> | null = null
  private size: number = 0

  private getNode(position: number): Node<T> {
    let index = 0
    let current = this.head
    while (index++ < position && current) {
      current = current.next
    }
    return current as Node<T>
  }

  append(value: T) {
    const node = new Node(value)
    if (this.head === null) {
      this.head = node
      this.size++
      return
    }

    let _next = this.head

    while (_next.next !== null) {
      _next = _next.next
    }

    _next.next = node
    this.size++
  }

  insert(position: number, value: T) {
    const node = new Node(value)

    if (this.head === null) {
      this.head = node
    } else if (position < 0 || position === 0) {
      node.next = this.head
      this.head = node
    } else if (position >= this.size) {
      this.append(value)
    } else {
      const prev = this.getNode(position - 1)
      node.next = prev.next
      prev.next = node
    }
    this.size++
  }

  removeAt(position: number) {
    if (position < 0 || position >= this.size) return null

    if (position === 0) {
      let v = this.head!.value
      this.head = this.head!.next
      this.size--
      return v
    }

    const prev = this.getNode(position - 1)
    const current = prev.next
    prev.next = current!.next
    this.size--
    return current!.value
  }

  get(position: number) {
    if (position < 0 || position >= this.size) return null

    return this.getNode(position).value
  }

  indexOf(value: T) {
    let index = 0
    let current = this.head
    while (current) {
      if (current.value === value) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }

  traverse(fn?: (v: Node<T>, i: number) => void) {
    let current = this.head
    let i = 0
    let v: T[] = []
    while (current) {
      fn?.(current, i)
      v.push(current.value)
      current = current.next
      i++
    }
    return v.join(' -> ')
  }

  get length() {
    return this.size
  }
}

const link = new LinkedList<string>();
link.append('leo')
link.append('ck')
link.append('dicaprio')
console.log(link.traverse());
link.insert(2, 'zjc')
//(node, i) => console.log(node.value, i)
console.log(link.traverse());

console.log(link.removeAt(2));
console.log(link.traverse());
console.log(link.get(1));


export { LinkedList }