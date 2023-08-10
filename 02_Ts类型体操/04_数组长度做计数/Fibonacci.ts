const FibonacciFn = (num: number) => {
  const res: number[] = []
  for (let i = 1; i <= num; i++) {
    if (i <= 2) {
      res.push(1)
    } else {
      res.push(res[res.length - 1] + res[res.length - 2])
    }
  }
  return res
}
console.log(FibonacciFn(8));