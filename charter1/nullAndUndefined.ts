// 默认情况下，类型检查器认为 null 与 undefined 可以赋值给任何类型。 null 与 undefined 是所有其它类型的一个有效值。
// --strictNullChecks
{
  let s = 'foo'
  s = null // error
  s = undefined // error
  let sn: string | null = 'bar'
  sn = null
}
console.log('-------')
// 注意，按照 JavaScript 的语义，TypeScript 会把 null 和 undefined 区别对待。string | null，string | undefined 和 string | undefined | null 是不同的类型
// 可选参数和可选属性
{
  const f = function(x: number, y?: number) { // y?: number  相当于number | undefined
    return x + (y || 0)
  }
  f(0, 1)
  f(0)
  f(0, null) // 'error null 不能赋值给'number|undefined'
}
// 可选属性也会有同样的处理
{
  class C {
    a: number
    b?: number
  }
  let c = new C()
  c.a = 12
  c.a = undefined // error, 'undefined' 不能赋值给 'number'
  c.b = 13
  c.b = undefined // ok
  c.b = null // error, 'null' 不能赋值给 'number | undefined'
}

// 类型保护和类型断言
{
  const f = function(sn: string | null): string {
    return sn
  }
}

{
  function broken(name: string | null): string {
    function postfix(epithet: string) {
      return name.charAt(0) + '.  the ' + epithet // error, 'name' 可能为 null
    }
    name = name || 'Bob'
    return postfix('great')
  }

  function fixed(name: string | null): string {
    function postfix(epithet: string) {
      return name!.charAt(0) + '.  the ' + epithet // ok
    }
    name = name || 'Bob'
    return postfix('great')
  }

  broken(null)
}

{
  type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'
}