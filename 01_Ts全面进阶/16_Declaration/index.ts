import { handle } from 'pkg';
import h from 'pkg2';
import foo from 'foo.md';
// 类型指令
//@ts-ignore
const name: string = 18

//@ts-expect-error 更严格 它只有在下一行代码真的存在错误时才能被使用
const name1: stirng = 18

// //@ts-expect-error 无意义的 expect-error 指令
const age: number = 18


const Res = handle()
const Res2 = h()
const Res3 = foo.replace('', '')


errorReporter('')
onerror = (e) => { }

window.userTracker = (s) => {

}



export { }




