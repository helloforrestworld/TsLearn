// 交叉类型
{
  function extend<T, U>(first: T, second: U):T & U {
    let result = {} as T & U
    for(let id in first) {
      result[id] = first[id] as any
    }
    for(let id in second) {
      if (!result.hasOwnProperty(id)) {
        result[id] = second[id] as any
      }
    }
    return result
  }
  let firstObj = {a: 1, c: 3}
  let secondObj = {a: 2, b: 2, d: 5}
  console.log(extend(firstObj, secondObj))

  class Person {
    constructor(public name: string) {

    }
  }

  interface Loggable {
    log(): void
  }

  class ConsoleLogger implements Loggable {
    log() {
      console.log(1)
    }
  }

  let jim = extend(new Person('Jim'), new ConsoleLogger())
  jim.name
  jim.log()
}

// 联合类型
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding === 'string') {
    // padding.substr
    return padding + value
  }
  throw new Error('Expected string or number, got ' + padding + '.')
}

// 如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。
interface Bird {
  fly(): void
  layEggs(): void
}

interface Fish {
  swim(): void
  layEggs(): void
}

function getSmallPet(): Fish | Bird {
  return {} as Fish | Bird
}

let pet = getSmallPet()
// pet.fly
pet.layEggs

// 类型保护
if ((pet as Fish).swim) {
  (pet as Fish).swim()
} else {
  (pet as Bird).fly()
}

// 用户自定义的类型保护
function isFish(pet: Fish | Bird): pet is Fish { // 类型谓词
  return (pet as Fish).swim !== undefined
}
if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}

// typeof 类型保护
function padLeft1(value: string, padding: string | number) {
  if (typeof padding === 'string') {
    padding.substr
    return padding + value
  }
}

// instanceof 类型保护
{
  class Bird {
    fly () {
      console.log('bird fly')
    }

    layEggs () {
      console.log('bird lay eggs')
    }
  }

  class Fish {
    swim () {
      console.log('fish swim')
    }

    layEggs () {
      console.log('fish lay eggs')
    }
  }

  function getRandomPet () {
    return Math.random() > 0.5 ? new Bird() : new Fish()
  }

  let pet = getRandomPet()

  if (pet instanceof Bird) {
    pet.fly()
  }
  if (pet instanceof Fish) {
    pet.swim()
  }
}

// 可为null的值
