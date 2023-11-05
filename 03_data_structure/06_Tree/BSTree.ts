import { btPrint } from 'hy-algokit';

type ITreeNode<T> = TreeNode<T> | null

class Node<T> {
  value: T | null = null
  constructor(value: T) {
    this.value = value
  }
}

class TreeNode<T> extends Node<T> {
  left: ITreeNode<T> = null
  right: ITreeNode<T> = null
}


class BST<T> {
  private root: ITreeNode<T> = null

  print() {
    btPrint(this.root)
  }

  //递归
  private insertNode(root: TreeNode<T>, node: TreeNode<T>) {
    const direction = (node.value as T) > (root.value as T) ? 'right' : 'left'
    if (!root[direction]) {
      root[direction] = node
      return
    }
    this.insertNode((root[direction] as TreeNode<T>), node)
  }
  insert(value: T) {
    if (!value) return

    const treeNode = new TreeNode(value)

    if (this.root === null) {
      this.root = treeNode
      return
    }

    this.insertNode(this.root, treeNode)

    //遍历
    // let current: ITreeNode<T> = this.root
    // while (current) {
    //   const direction: 'right' | 'left' = (treeNode.value as T) > (current.value as T) ? 'right' : 'left'
    //   if (!current[direction]) {
    //     current[direction] = treeNode
    //     return
    //   }
    //   current = current[direction]
    // }
  }

  /**
   * 访问根节点
   * 访问左子树
   * 访问右子树
   */
  private preOrderTraverseNode(root: ITreeNode<T>, callbackfn: (value: T) => void) {
    if (!root) return

    callbackfn(root.value as T)
    if (root.left) {
      this.preOrderTraverseNode(root.left, callbackfn)
    }
    if (root.right) {
      this.preOrderTraverseNode(root.right, callbackfn)
    }
  }
  preOrderTraverse(callbackfn: (value: T) => void) {
    this.preOrderTraverseNode(this.root, callbackfn)
  }

  /**
   * 访问左子树
   * 访问根节点
   * 访问右子树
   */
  private inOrderTraverseNode(root: ITreeNode<T>, callbackfn: (value: T) => void) {
    if (!root) return

    if (root.left) {
      this.inOrderTraverseNode(root.left, callbackfn)
    }
    callbackfn(root.value as T)
    if (root.right) {
      this.inOrderTraverseNode(root.right, callbackfn)
    }
  }
  inOrderTraverse(callbackfn: (value: T) => void) {
    this.inOrderTraverseNode(this.root, callbackfn)
  }

  /**
   * 访问左子树
   * 访问右子树
   * 访问根节点
   */
  private lastOrderTraverseNode(root: ITreeNode<T>, callbackfn: (value: T) => void) {
    if (!root) return

    if (root.left) {
      this.lastOrderTraverseNode(root.left, callbackfn)
    }
    if (root.right) {
      this.lastOrderTraverseNode(root.right, callbackfn)
    }
    callbackfn(root.value as T)
  }
  lastOrderTraverse(callbackfn: (value: T) => void) {
    this.lastOrderTraverseNode(this.root, callbackfn)
  }

  //层序遍历
  levelOrderTraverse(callbackfn: (value: T) => void) {
    if (!this.root) return

    const queue = [this.root]

    while (queue.length !== 0) {
      const node = queue.shift() as TreeNode<T>
      callbackfn(node.value as T)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
  }

  //最大值、最小值 O(log n)
  bestValue(type: 'max' | 'min') {
    if (!this.root) return -1

    const best = type === 'max' ? 'right' : 'left'
    let current = this.root

    while (current) {
      if (!current[best]) {
        return current.value
      }
      current = current[best]!
    }
  }

  //搜索 O(log n)
  search(value: T) {
    let current = this.root

    while (current) {
      if (current.value === value) return true
      current = value > current.value! ? current.right : current.left
    }

    return false
  }

  private getNode(value: T) {
    let current = this.root

    while (current) {
      if (current.value === value) return current
      current = current[value > current.value! ? 'right' : 'left']
    }
    return null
  }
  private getParentNode(value: T) {
    let prev: ITreeNode<T> = null
    let current = this.root

    while (current) {
      if (current.value === value) return prev
      prev = current
      current = current[value > current.value! ? 'right' : 'left']
    }
    return null
  }
  private getSuccessor(node: TreeNode<T>) {
    //1. 找到后继节点
    let current = node.right
    //后继节点 删除节点的右子树的最小值
    let successor: ITreeNode<T> = null
    let successorParent: TreeNode<T> = node

    while (current) {
      successor = current
      current = current.left
      if (current) {
        successorParent = successor
      }
    }

    //2. 替换后继节点左右子树指向操作
    //处理后继节点没有左子树的情况，就不需要给后继节点的right 变更指向
    if (successor !== node.right) {
      successorParent.left = successor!.right
      successor!.right = node.right
    }

    successor!.left = node.left

    return successor!
  }
  remove(value: T) {
    const node = this.getNode(value)
    //1.没有找到节点
    if (!node) return false

    //2.删除叶子节点(左子节点、右子节点都为null为叶子节点)
    if (!node.left && !node.right) {
      //2.1 获取其父节点
      const parent = this.getParentNode(value)
      //2.2 判断其是否是顶级节点
      if (parent) {
        //2.3 判断value 是 左子节点还是右子节点（BST特点：左边小于父节点，反之）
        parent[value > parent.value! ? 'right' : 'left'] = null
      } else {
        this.root = null
      }
    }

    //3.删除一个子节点
    if ((!node.left && node.right) || (!node.right && node.left)) {
      //3.1 获取其父节点
      const parent = this.getParentNode(value)
      //3.2 获取存在的一个子节点的是左边还是右边
      const exclude = node.left ? 'left' : 'right'
      if (parent) {
        const childNode = node[exclude]
        parent[childNode?.value! > parent.value! ? 'right' : 'left'] = childNode
      } else {
        this.root = node[exclude]
      }
    }

    //4.删除存在2个子节点
    if (node.left && node.right) {
      const successor = this.getSuccessor(node)

      const parent = this.getParentNode(value)
      if (parent) {
        parent[successor.value! > parent.value! ? 'right' : 'left'] = successor
      } else {
        this.root = successor
      }
    }
  }

  invertTree(node: TreeNode<T> = this.root!) {
    let left = node.left
    let right = node.right

    node.left = right
    node.right = left

    if (node.left) {
      this.invertTree(node.left)
    }
    if (node.right) {
      this.invertTree(node.right)
    }
  }
}

const bst = new BST<number>()
// bst.insert(4)
// bst.insert(2)
// bst.insert(7)
// bst.insert(1)
// bst.insert(3)
// bst.insert(5)

bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)

bst.print()
bst.invertTree()
bst.print()

const premap: number[] = []
bst.preOrderTraverse((value) => {
  premap.push(value)
})
console.log(premap.join(','));

const inmap: number[] = []
bst.inOrderTraverse((value) => {
  inmap.push(value)
})
console.log(inmap.join(','));

const lastmap: number[] = []
bst.lastOrderTraverse((value) => {
  lastmap.push(value)
})
console.log(lastmap.join(','));

const levelmap: number[] = []
bst.levelOrderTraverse((value) => {
  levelmap.push(value)
})
console.log(levelmap.join(','));

console.log(bst.bestValue('max'));
console.log(bst.bestValue('min'));
console.log(bst.search(3));
console.log(bst.search(1));

// bst.remove(3)
// bst.remove(8)
// bst.remove(12)
// bst.remove(25)
// bst.remove(6)
// bst.remove(10)
// bst.print()

// // bst.insert(17)
// bst.remove(20)
// bst.print()

// bst.remove(13)
// bst.print()


bst.remove(6)
bst.insert(19)
bst.print()

bst.remove(15)
bst.print()

bst.remove(8)
bst.remove(7)
bst.print()

bst.remove(18)
bst.print()
export default {}