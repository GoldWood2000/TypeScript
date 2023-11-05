const tree = [{
  name: '1', children: [
    { name: '1-1', children: [{ name: '1-1-1', children: [] }, { name: '1-1-2', children: [] }] },
    { name: '1-2', children: [] },
    { name: '1-3', children: [{ name: '1-3-1', children: [] }, { name: '1-3-2', children: [] }, { name: '1-3-3', children: [] }] },
    { name: '1-4', children: [{ name: '1-4-1', children: [{ name: '1-4-1-1', children: [] }] }] },
    { name: '1-5', children: [] },
  ]
}, {
  name: '2', children: [
    { name: '2-1', children: [] },
    { name: '2-2', children: [] },
    { name: '2-3', children: [] },
  ]
}]

// 1.首先将根节点放入《队列》（队列，先进先出FIFO）中。
// 2.从队列中取出第一个节点，并检验它是否为目标。
//   --如果找到目标，则结束搜索并回传结果。
//   --否则将它所有尚未检验过的直接子节点加入队列中。
// 3.若队列为空，表示整张图都检查过了——亦即图中没有欲搜索的目标。结束搜索并回传“找不到目标”。
// 4.重复步骤2。
const BreadthFristSearch = (data, value, cb) => {
  if (Array.isArray(data) && data.length !== 0) {
    for (let i = 0; i < data.length; i++) {
      const queue = [data[i]];
      while (queue.length !== 0) {
        const node = queue.shift()
        cb(node)
        if (node.name === value) return node
        node.children.forEach((node) => queue.push(node))
      }
    }
    return false
  }
}
// console.log(tree, BreadthFristSearch(tree, '1-1-1y', (node) => console.log(node.name)));


// 1. 首先将根节点放入stack中。
// 2. 从stack中取出第一个节点，并检验它是否为目标。
//      --如果找到目标，则结束搜寻并回传结果。
//      --否则将它某一个尚未检验过的直接子节点加入stack中。
// 3. 重复步骤2。
// 4. 如果不存在未检测过的直接子节点。
//      --将上一级节点加入stack中。
//      --重复步骤2。
// 5. 重复步骤4。
// 6. 若stack为空，表示整张图都检查过了——亦即图中没有欲搜寻的目标。结束搜寻并回传“找不到目标”。
const DepthFirstSearch = (data, value, cb) => {
  const dfs = (node) => {
    cb(node)
    if (node.name === value) {
      return node
    }
    const { children } = node
    for (let i = 0; i < children.length; i++) {
      const back = dfs(children[i])
      if (back) return back
    }
  }

  if (Array.isArray(data) && data.length !== 0) {
    for (let i = 0; i < data.length; i++) {
      const res = dfs(data[i])
      if (res) return res
    }
    return false
  }
}

console.log(tree, DepthFirstSearch(tree, '1-4-1-1', (node) => console.log(node.name)));