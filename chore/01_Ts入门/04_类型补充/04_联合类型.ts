

function printPoint(point?: number | string) {
    console.log(point);
}
printPoint()
printPoint(123)
printPoint('leo')
printPoint(undefined)  //可选类型也可以直接


function print(x?: string) {

}
print()
print(undefined)

export {}