

function testDecorator(constructor: any) {
  console.log(constructor);
  console.log('decorator');
}


function testDecorator2() {
  return (constructor: any) => {
    console.log('decorator2');
  }
}




@testDecorator
@testDecorator2()
class test {

}