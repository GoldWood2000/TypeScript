
class HashTable<T> {
  //链地址法
  storage: [string, T][][] = []
  //数组长度
  private length: number = 7
  //记录存放个数 count / length = 装填因子
  private count: number = 0

  private isPrime(num: number) {

    // for (let i = 2; i < num; i++) {
    //   if (num % i === 0) {
    //     return false
    //   }
    // }
    // return true

    //取平方根 O(n) -> O(log n)
    const sqrt = Math.sqrt(num)

    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }

  //最主要还是此函数
  private hashFnc(key: string, max: number) {
    let hashCode = 0
    for (let i = 0; i < key.length; i++) {
      //霍纳法则
      hashCode = hashCode * 31 + key.charCodeAt(i)
    }

    const index = hashCode % max
    return index
  }

  //扩容
  private resize(length: number) {

    //寻找到质数，让值更平均分布
    // let prime = length
    // while (!this.isPrime(prime)) {
    //   prime++
    // }
    // length = prime
    const findPrime = (num: number) => {
      if (this.isPrime(num)) {
        length = num
        return
      }
      findPrime(++num)
    }
    findPrime(length)

    // console.log(length);
    //删除，最小容量为7
    // if (length < 7) length = 7

    const old = this.storage
    this.storage = []
    this.count = 0
    this.length = length

    old.forEach(item => {
      if (!item) return

      for (let i = 0; i < item.length; i++) {
        const [key, value] = item[i];
        this.put(key, value)
      }
    })
  }

  put(key: string, value: T) {
    //hash函数计算出下标
    const index = this.hashFnc(key, this.length)

    let bucket = this.storage[index]

    //开始为空，数据结构为 [[[key, value]]]
    if (bucket === undefined) {
      bucket = []
      this.storage[index] = bucket
    }

    //是否是重复
    let isUpdate = false
    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      //重复即替换
      if (tuple[0] === key) {
        tuple[1] = value
        isUpdate = true
        return
      }
    }

    if (!isUpdate) {
      bucket.push([key, value])
      this.count++

      if (this.count / this.length > 0.75) {
        this.resize(this.length * 2)
      }
    }
  }

  get(key: string) {
    const index = this.hashFnc(key, this.length)

    let bucket = this.storage[index]

    if (!bucket) return undefined

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      if (tuple[0] === key) {
        return tuple[1]
      }
    }

    return undefined
  }

  delete(key: string) {
    const index = this.hashFnc(key, this.length)

    let bucket = this.storage[index]

    if (!bucket) return undefined

    for (let i = 0; i < bucket.length; i++) {
      const tuple = bucket[i]
      if (tuple[0] === key) {
        const v = tuple[1]
        bucket.splice(i, 1)
        this.count--

        if (this.count / this.length < 0.25 && this.length > 7) {
          this.resize(Math.floor(this.length / 2))
        }

        return v
      }
    }

    return undefined
  }
}

const map = new HashTable()
map.put('aaa', 100)
map.put('aaa', 200)
map.put('bbb', 300)
map.put('ccc', 400)
map.put('ddd', 500)

// console.log(map.get('ccc'));
console.log(map.storage);

map.put('eee', 600)
map.put('fff', 700)
map.put('nba', 800)
map.put('cba', 900)
map.put('mba', 1000)
map.put('abc', 1100)

console.log(map.storage);

map.delete('abc')
map.delete('mba')
map.delete('cba')
map.delete('nba')
map.delete('fff')
map.delete('eee')
map.delete('ddd')
map.delete('ccc')

console.log(map.storage);