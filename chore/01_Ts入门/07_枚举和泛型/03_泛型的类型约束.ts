interface ILength {
    length: number
    toValue?: string
}

function getLength<T extends ILength>(arg: T) {
    console.log(arg.length);
    arg.toValue && console.log(arg.toValue);
}
Object.defineProperty(String.prototype, 'toValue', {
    get: () => {
        return 'toValue'
    }
})
getLength(new String('str'))
getLength([123, 343])
getLength({ length: 2 })