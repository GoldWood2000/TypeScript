
const arr: (number | string)[] = [1, 2 ,3, 'leo']
console.log(arr);

interface IInfo{
    name: string,
    age: number
}
const arr2: IInfo[] = [{  //对象数组
    name: 'leo',
    age: 18
},{name: 'dicaprio',age: 20}]


//tuple
const arr3: [string, number][] = [
    ['leo',18],
    ['dicaprio', 20],
    ['chen', 22]
]


export {}