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
}

const bst = new BST()
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


export default {}