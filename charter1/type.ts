// 布尔值
let isDone: boolean = false
// 数字
let decLiterval: number = 20
let hexLiterval: number = 0x14
let binaryLiterval: number = 0b10100
let octalLiterval: number = 0o24
// 字符串
let userName: string = 'bob'
let age: number = 30
let sentence = `Hello, my name is  ${userName},
i'll be ${age + 1} year old next month
`
let sentenceOld =
  'Hello, my name is ' +
  userName +
  ',\n\n' +
  "i'll be" +
  age +
  1 +
  'year old next month'
// 数组
let list: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]
// 元组
let x: [string, number]
x = ['string', 2]
// x = [2, 'string']
// x = ['string', 2, 3]
// x[2] = 1
// console.log(x[0].substr);
// console.log(x[1].substr);

// enum 枚举类型
enum Color {
  Red = 1,
  Green,
  Blue
}

let c: Color = Color.Green // 2
let colorName: string = Color[2] // Green

// any 类型
let notSure: any = 4
notSure = '123'
notSure = true
notSure = [1, 2, 3]
let anyList: any = [1, 'string', true]

// void 没有任何值
function warnUser(): void {
  console.log('This is my warnning')
}
let unuseable: void = null
let unuseable2: void = undefined
let nullType: null = null
nullType = undefined // 子类型可以赋值给父类型
let undefinedType: undefined = undefined // null, undefined 是任何类型的子类型
undefinedType = undefined
/**
 * --strictNullChecks 严格检测下
 * let num: number = 3
 * num = null
 * 会报错
 */

// never  类型表示的是那些永不存在的值的类型 任何类型的子类型，可以赋值给任意类型
function error(message: string): never {
  throw new Error(message)
}
function inifiniteLoop(): never {
  while (true) {}
}

// object
declare function create(o: object | null): void
create({ a: 1 })
create(null)
// create('string')
// create(undefined)
// create(true)
// create(3)

// 类型断言
let someValue =  'this is a string'
// someValue.length
let otherValue:any = 'this is a other value'
// otherValue.length 虽然不会报错, 但编辑器不会提示

let strLength = (<string>otherValue).length
strLength = (otherValue as string).length
