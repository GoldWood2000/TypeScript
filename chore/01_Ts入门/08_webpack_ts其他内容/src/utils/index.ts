export namespace foo {      //不推荐使用
    //必须 export才能在外部使用
    export function format() {
        console.log(new Date().toLocaleDateString());
    }
}


export namespace bar {
    export function format() {
        console.log(new Date().toLocaleTimeString());
    }
}

