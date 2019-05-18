// var 问题回顾
{
  function f() {
    var a = 10
    return function() {
      var b = a + 1
      return b
    }
  }
  var g = f()
  g()

  function sumMatrix(matrix) {
    var sum = 0
    for (var i = 0; i < matrix.length; i++) {
      var currentRow = matrix[i]
      for (var i = 0; i < currentRow.length; i++) {
        sum += currentRow[i]
      }
    }
    return sum
  }

  console.log(sumMatrix([[1, 2, 3], [4, 5, 6]]))
  // 输出4, 因为i被覆盖了, 第一层循环只走了一次

  for (var i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i)
    }, i * 100)
  }
  // 10 10 10 10 10 10 10 10 10 10 10 10
  for (var i = 0; i < 10; i++) {
    ;(function(i) {
      setTimeout(() => {
        console.log(i)
      }, i * 100)
    })(i)
  }
}

// let声明
{
  // a = 1
  let a: number
  a = 2

  function sumMatrix2(matrix: number[][]) {
    var sum = 0
    for (let i = 0; i < matrix.length; i++) {
      let currentRow = matrix[i]
      for (let j = 0; j < currentRow.length; j++) {
        sum += currentRow[j]
      }
    }
    return sum
  }
}

// const声明
{
  const date = '2019-12-03'
  // date = 2
  const mySister = {
    name: 'kitty',
    age: 2
  }
  // mySister = {}
  mySister.name = 'forrest'
}

// 解构
{
  // 数组解构
  let input: [number, number] = [1, 2]
  let [first, second] = input

  function f2([first, second]: any[]) {
    return first + second
  }
  console.log(f2(input))
  let input2 = [1, 2, 3, 4, 5]
  let [first2, ...rest] = input2
  let [, , third, , last] = input2
  console.log(rest)
  // 对象解构
  let o = {
    a: 'fpp',
    b: 1
  }
  let { a, b } = o
  function keepWholeObject(wholeObject: { a: string; b?: number }) {
    let { a, b = 100 } = wholeObject
    console.log(a, b)
  }
  // 函数声明
  type c = { a: string; b?: number }
  function f3({ a, b = 0 } = { a: '' }): void {}
  f3({a: 'yes'})
  // f3({})
  f3()

  // 扩展运算符 ...
}
