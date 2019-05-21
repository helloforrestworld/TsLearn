// 类型推断
{
  let x = 3
  function a(a = 3) {

  }
}

// 通用类型
{
  let x = [0, 1, 'string', null]
  x = ['string']
  x = [2]
  // x = [true]
  x = [null]
  x = [undefined]

  // 由于最终的通用类型取自候选类型，有些时候候选类型共享一个公共结构，但是却没有一个类型能做为所有候选类型的超级类型

  class Animal {
    numLegs: number
  }

  class Bee extends Animal {
  }

  class Lion extends Animal {
  }

  let zoo = [new Bee(), new Lion()]
  zoo = [new Animal()]
}

// 上下文类型
{
  window.onmousedown = function(mouseEvent) {
    // console.log(mouseEvent.clickTime)  // Error
  }
}