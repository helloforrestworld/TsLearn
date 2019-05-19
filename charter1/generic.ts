// 泛型
{
  function identity(arg: any): any {
    return arg + ''
  }

  function identity2<T>(arg: T): T {
    return arg
  }

  // let output = identity2<string>('myString')
  let output = identity2('myString')
}

{
  function identity3<T>(arg: T): T {
    return arg
  }

  let myIdentity1: <T>(arg: T) => T = identity3
  let myIdentity2: {<T>(arg: T): T} = identity3
}

// 泛型接口
{
  function identity4<T>(arg: T): T {
    return arg
  }

  // interface GenericIdentityFn {
  //   <T>(arg: T): T
  // }
  // let myIdentity1: GenericIdentityFn = identity4

  interface GenericIdentityFn<T> {
   (arg: T): T
  }
  let myIdentity2: GenericIdentityFn<number> = identity4
}

// 泛型类
{
  class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T
  }

  let myGenericNumber = new GenericNumber<number>()
  myGenericNumber.zeroValue = 0
  myGenericNumber.add = function (x, y) {
    return x + y
  }

  let stringGeneric = new GenericNumber<string>()
  stringGeneric.zeroValue = ''
  stringGeneric.add = function (x, y) {
    return x + y
  }
}

// 泛型约束
{
  interface Lengthwise {
    length: number
  }
  function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length)
    return arg
  }
  // loggingIdentity(1)
  loggingIdentity({a: 1, length: 1})
}

// 在泛型约束中使用类型参数
{
  function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
  }

  let x = {a: 1, b: 2, c: 3}
  // console.log(getProperty(x, 'm'))
  console.log(getProperty(x, 'a'))
}