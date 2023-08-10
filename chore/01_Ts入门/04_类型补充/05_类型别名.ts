type pointType = {
    x: number, 
    y: number, 
    z?: number
}
type IdType = number | string

function printPoint(point: pointType) {
    console.log(point.x);
    console.log(point.y);
}
printPoint({x: 123, y: 321})
printPoint({x: 123, y: 321, z: 456})

//可选，有参数类型必须是number | string
function printId(id?: IdType) {

}
printId()
printId('123')
printId(123)


export {}