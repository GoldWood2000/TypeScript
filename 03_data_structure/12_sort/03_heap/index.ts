const swap = <T>(i: number, j: number, arr: T[],) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

const max_heap = <T>(start: number, end: number, arr: T[]) => {
  let son = (start * 2) + 1

  //子节点大于等于最大堆边界(即数组长度)则说明没有子节点即退出
  if (son >= end) return

  //第一个判断是否存在右子节点（首先来到这里必定说明存在左子节点），第二个判断左子节点是否小于右子节点，成立则使用右子节点进行交换
  if (son + 1 < end && arr[son] < arr[son + 1]) {
    son++
  }

  if (arr[start] < arr[son]) {
    swap(start, son, arr)
    max_heap(son, end, arr)
  }
}

const heapSort = <T>(arr: T[]) => {

  for (let i = Math.floor((arr.length - 1) / 2); i >= 0; i--) {
    max_heap(i, arr.length, arr)
  }

  for (let i = arr.length - 1; i > 0; i--) {
    swap(0, i, arr)
    max_heap(0, i, arr)
  }
}

const mock = [3, 0, 8, 6, 1, 5]
heapSort(mock)
console.log(mock);
