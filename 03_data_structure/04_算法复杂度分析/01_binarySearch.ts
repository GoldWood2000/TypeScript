const array = new Array(10000).fill(0).map((_, i) => i + 1)

const binarySearch = (array: number[], num: number) => {
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    let binary = Math.floor((right + left) / 2)

    if (array[binary] === num) return binary

    if (array[binary] > num) {
      right = binary - 1
    }

    if (array[binary] < num) {
      left = binary + 1
    }
  }

  return -1
}

console.log(array);
const i = binarySearch(array, 1801)
console.log(array[i]);

