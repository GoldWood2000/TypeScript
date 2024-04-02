const arr = [3, 15, 14, 34, 56, 1, 2]


// 1.默认选择第一个
// 2.寻找到剩下元素中比“选择的元素”小的数据（有：交换，无：无操作）
// 3.重复此步骤

//未排序的部分中找到最小（或最大）的元素，然后将其与未排序部分的第一个元素交换位置。通过重复这个过程，每次选择出未排序部分的最小（或最大）元素，逐渐构建出有序的数组
const selectionSort = (arr: number[]) => {

  for (let i = 0; i < arr.length; i++) {

    let current = arr[i];
    let nextIndex = -1

    for (let j = i + 1; j < arr.length; j++) {
      const next = arr[j];

      if (next < current) {
        nextIndex = j
        current = next
      }

      if (nextIndex !== -1 && j === arr.length - 1) {
        [arr[i], arr[nextIndex]] = [arr[nextIndex], arr[i]]
      }
    }
  }

  return arr
}

console.log(selectionSort(arr).join(','));

export { selectionSort } 