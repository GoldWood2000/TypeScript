class Graph<T> {
  verteces: T[] = []
  adjList: Map<T, T[]> = new Map()

  addVertex(vertex: T) {
    this.verteces.push(vertex)
    this.adjList.set(vertex, [])
  }

  addEdge(v1: T, v2: T) {
    this.adjList.get(v1)?.push(v2)
    this.adjList.get(v2)?.push(v1)
  }

  BreadthFristSearch(callbackfn: (v: T) => void) {
    if (this.verteces.length === 0) return

    const queue: T[] = []
    queue.push(this.verteces[0])

    const set = new Set<T>()
    set.add(this.verteces[0])

    while (queue.length) {
      const item = queue.shift() as T
      callbackfn(item)

      const neighbor = this.adjList.get(item)!
      for (const nei of neighbor) {
        if (!set.has(nei)) {
          queue.push(nei)
          set.add(nei)
        }
      }
    }
  }

  recursion(root: T, callbackfn: (v: T) => void, set: Set<T>) {
    const neighbors = this.adjList.get(root)!
    callbackfn(root)
    for (const nei of neighbors) {
      if (!set.has(nei)) {
        set.add(nei)
        this.recursion(nei, callbackfn, set)
      }
    }
  }

  DepthFrsitSearch(callbackfn: (v: T) => void) {
    if (this.verteces.length === 0) return
    this.recursion(this.verteces[0], callbackfn, new Set<T>([this.verteces[0]]))
  }

}

const graph = new Graph()

for (let i = 65; i < 74; i++) {
  graph.addVertex(String.fromCharCode(i))
}

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

console.log(graph.verteces);
console.log(graph.adjList);
graph.BreadthFristSearch((v) => {
  console.log(v);
})
console.log('----------');
graph.DepthFrsitSearch((v) => {
  console.log(v);
})

export default {}