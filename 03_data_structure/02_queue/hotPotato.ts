import ArrayQueue from './ArrayQueue';

const hotPotato = (array: string[], num: number) => {
  const queue = new ArrayQueue<string>()
  array.forEach(item => queue.enqueue(item))
  let count = 0

  while (queue.size() > 1) {
    count++
    const element = queue.dequque() as string
    if (count !== num) {
      queue.enqueue(element)
    }
    count === num && (count = 0)
  }

  return queue.peek()
}

console.log(hotPotato(['leo', 'ck', 'dicaprio', 'james', 'abc', 'cba', 'nba', 'mba'], 4));
