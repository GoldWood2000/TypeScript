const arr = [3, 15, 14, 34, 56, 1, 2]

const swap = (arr: number[], i: number, j: number) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

const partition = (arr: number[], low: number, high: number) => {

  const pivot = arr[low]
  let partitionIndex = low + 1
  for (let i = partitionIndex; i <= high; i++) {
    if (arr[i] < pivot) {
      swap(arr, partitionIndex, i)
      partitionIndex++
    }
  }
  swap(arr, partitionIndex - 1, low)
  return partitionIndex - 1
}


const quickSort = (arr: number[], low: number = 0, high: number = arr.length - 1) => {
  if (arr.length <= 1) return
  if (low >= high) return
  const pivotIndex = partition(arr, low, high)
  quickSort(arr, low, pivotIndex)
  quickSort(arr, pivotIndex + 1, high)
}

quickSort(arr)
console.log(arr);




export { quickSort } 