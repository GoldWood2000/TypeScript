//5.2 以下， https://juejin.cn/post/7250502225692655653
declare let array: string[] | number[];
array.map(item => item)
// 此表达式不可调用。
array.filter((x) => !!x);
// 此表达式不可调用。
array.every((x) => !!x);
// 此表达式不可调用。
array.find((x) => !!x);