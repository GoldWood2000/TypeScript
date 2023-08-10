const message = 'leo';
console.log(!!message);

const foo: string | null = null
let bar = foo ?? '默认值'   //空值合并操作符（??）是一个逻辑操作符，当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数
console.log(bar);
console.log(foo || '默认值2');   //if expr1 true return 1 ， if expr1 fasle return 2
console.log(foo && '默认值3');   //if expr1 true return 2 ， if expr1 fasle return 1


const foz = null ?? 'default string';
console.log(foz);   // expected output: "default string"
const baz = 0 ?? 42;
console.log(baz);   // expected output: 0






export { }