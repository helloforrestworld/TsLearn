interface LabelledValue {
  label: string
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}

let myObj = { size: 10, label: 'Size 10 Object' }
printLabel(myObj)

interface Square {
  color: string
  area: number
}

interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(squareConfig: SquareConfig): Square {
  let { color = 'red', width = 100 } = squareConfig
  return {
    color: color,
    area: width * 2
  }
}

console.log(createSquare({ color: 'yellow' }))

// 只读属性
{
  interface Point {
    readonly x: number
    readonly y: number
  }
  let p1: Point = { x: 10, y: 20 }
  // p1.x =  2
}

// ReadonlyArray
{
  let a: number[] = [1, 2, 3]
  let ro: ReadonlyArray<number> = a
  // ro.push(1)
  // ro[0] = 1
  console.log((ro as number[])[0])
}

// 额外属性检查
{
  interface obj {
    color?: string
    area?: number
    // [propName: string]: any
  }
  let obj1: obj = { color: 'red', area: 100 }
  // let obj2: obj = {col: 'red', area: 100}
  // let obj3: obj = {col: 'red', area: 100} as obj
  let objAny = { col: 'red', area: 100 }
  let obj4: obj = objAny
}

// 接口描述函数类型
{
  interface searchFun {
    (source: string, subString: string): boolean
  }
  let mySearch: searchFun = function(src, sub: string) {
    let result = src.search(sub)
    return result > -1
  }
}

// 可索引的类型
{
  interface stringArray {
    [index: number]: string
  }
  let myArray: stringArray = ['Bob', 'Amy']
  console.log(myArray[0])

  // TypeScript 支持两种索引签名：字符串和数字
  interface stringArray2 {
    [index: string]: string
  }
  let myArray2: stringArray = ['Bob', 'Amy']
  console.log(myArray2['0'])
  // 两种索引签名可以同时使用
  // 但是数字类型索引签名的类型必须是字符串索引签名类型的子集
  class Animal {
    name: string
  }
  class Dog extends Animal {
    breed: string
  }
  // ERROR
  // interface NotOkay {
  //   [x: number]: Animal
  //   [x: string]: Dog
  // }

  // CORRECT
  interface NotOkay {
    [x: number]: Dog
    [x: string]: Animal
  }
}

// 索引签名设置为只读
{
  interface ReadonlyStringArray {
    readonly [index: number]: string
  }
  let myReadonlyStringArray = ['bread']
  // myReadonlyStringArray[0] = 2
}

// 类类型接口
{
  interface ClockInterface {
    currentTime: Date
    setTime(d: Date): void
  }

  class Clock implements ClockInterface {
    currentTime: Date
    setTime(d: Date) {
      this.currentTime = d
    }
    constructor(h: number, m: number) {}
  }
}

// 类静态部分与实例部分
{
  // interface ClockConstructor {
  //   new (hour: string, minute: number)
  // }
  // // error
  // class Clock implements ClockConstructor {
  //   constructor(hour, minute) {

  //   }
  // }

  interface ClockConstructor {
    new (hour: number, minute: number)
  }
  interface ClockInterface {
    tick(): void
  }

  class DigitalClock implements ClockInterface {
    tick() {
      console.log('da da da ')
    }
    constructor(hour: number, minute: number) {}
  }

  class AnalogClock implements ClockInterface {
    tick() {
      console.log('tick top')
    }
    constructor(hour: number, minute: number) {}
  }

  function createClock(
    ctor: ClockConstructor,
    hour: number,
    minute: number
  ): ClockInterface {
    return new ctor(hour, minute)
  }
}

// 接口继承
{
  interface Shape {
    color: string
  }
  interface Square extends Shape {
    sideLength: Number
  }

  let mySquare = {} as Square
  mySquare.color = 'red'
  mySquare.sideLength = 3

  // 一个接口可以继承多个接口
  interface rect extends Square, Shape {
    area: number
  }
  let myRect = {} as rect
  myRect.color = 'green'
  myRect.sideLength = 3
  myRect.area = 20
}

// 混合类型
{
  interface Counter {
    (start: number): void
    interval: number
    reset(): void
  }

  function getCounter(): Counter {
    let counter = function(start: number) {} as Counter
    counter.interval = 123
    counter.reset = function() {}
    return counter
  }
}

// 接口继承类
{
  class Control {
    private state: any
  }

  interface SelectableControl extends Control {
    select(): void
  }

  class Button extends Control implements SelectableControl {
    select() {}
  }

  // 当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。
  // class ImageC implements SelectableControl {
  //   select() {}
  // }
}