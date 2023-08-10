

function printMessagelength(str?: string) {
    //即使加了调用函数也不能传入空，编译可以通过
    console.log(str!.length);           //非空断言
    // console.log(str && str!.length); //编译和传入空都可以通过
    // console.log(str?.length);        //可选链


}

printMessagelength('leo');
printMessagelength('dicaprio');
printMessagelength()