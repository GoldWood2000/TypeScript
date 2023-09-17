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

  max() {
    if (!this.root) return -1

    let current = this.root
    while (current) {
      current.right
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

export default {}