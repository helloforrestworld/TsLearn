// 类
{
  class Greeter {
    greeter: string

    constructor(message: string) {
      this.greeter = message
    }

    greet() {
      console.log('Hello, ' + this.greeter)
    }
  }

  let greeter = new Greeter('forrest')
  greeter.greet()
}

// 继承
{
  class Animal {
    move(distance: number = 0) {
      console.log(`Animal move ${distance}m`)
    }
  }

  class Dog extends Animal {
    bark() {
      console.log('Woof, Woof!')
    }
  }

  let dog = new Dog()
  dog.bark()
  dog.move(100)
}

{
  class Animal {
    name: string

    constructor(name: string) {
      this.name = name
    }

    move(distance: number = 0) {
      console.log(`${this.name} moved ${distance}m`)
    }
  }

  class Snake extends Animal {
    constructor(name: string) {
      super(name)
    }

    move(distance: number = 5) {
      console.log('Slithering...')
      super.move(distance)
    }
  }

  class Horse extends Animal {
    constructor(name: string) {
      super(name)
    }

    move(distance: number = 100) {
      console.log('Galloping...')
      super.move(distance)
    }
  }

  let sandy = new Snake('sandy')
  let tommy = new Horse('tommy')
  sandy.move()
  tommy.move(365)
}

// 公共，私有与受保护 + readonly修饰符
{
  class Animal {
    private name: string

    constructor(name: string) {
      this.name = name
    }
  }

  let animal = new Animal('Andy')
  // error
  // animal.name

  class Rhino extends Animal {
    constructor(name: string) {
      super(name)
    }

    sayMyName() {
      // 派生类不能访问私有属性
      // console.log(super.name)
    }
  }

  class Employee {
    private name: string

    constructor(name: string) {
      this.name = name
    }
  }

  let animalBob = new Animal('bob')
  let rhino = new Rhino('rhino')
  let employee = new Employee('forrest')

  animalBob = rhino // 没啥问题
  // animalBob = employee // 不兼容
}

{
  // protected 修饰符与 private 修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问
  class Person {
    protected name: string

    protected constructor(name: string) { // 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承
      this.name = name
    }
  }

  class Employee extends Person {
    private department: string

    constructor(name: string, department: string) {
      super(name)
      this.department = department
    }

    getElevatorPitch() {
      console.log(`Hello, my name is ${this.name}, my department is ${this.department}`)
    }
  }

  let employee1 = new Employee('Jane', 'Sales')
  employee1.getElevatorPitch()
}

{
  class Person {
    readonly name: string

    constructor(name: string) {
      this.name = name
    }
  }

  let john = new Person('john')
  // john.name = 1

  class Boy extends Person {
    tall: number

    constructor(name: string, tall: number) {
      super(name)
      this.tall = tall
    }

    changeName(name: string ) {
      // this.name = name
    }
  }
}

{
  // 参数属性
  class Person {
    // private readonly name: string
    constructor(readonly name: string) {
      // this.name = name
    }
  }
}

// 存取器
{
  const secretCode = '0xx0'

  class Employee {
    private _fullName: string

    constructor(fullName: string) {
      this._fullName = fullName
    }

    get fullName(): string {
      return this._fullName
    }

    set fullName(newName: string) {
      if (secretCode && secretCode === '0xx0') {
        this._fullName = newName
      } else {
        console.log("Error: Unauthorized update of employee")
      }
    }
  }

  let employee = new Employee('John Snow')
  employee.fullName = 'Rhiannon J'
  console.log(employee.fullName)
}

// 静态属性
{
  class Grid {
    static origin = {x: 0, y: 0}

    scale: number

    constructor(scale: number) {
      this.scale = scale
    }

    calculateDistanceFromOrigin(point: {x: number, y: number}) {
      let xDis = point.x - Grid.origin.x
      let yDis = point.y - Grid.origin.y

      return Math.sqrt(xDis * xDis + yDis * yDis) * this.scale
    }
  }

  let grid1 = new Grid(1.0)
  let grid2 = new Grid(5.0)
  console.log(grid1.calculateDistanceFromOrigin({x: 3, y: 4}))
  console.log(grid2.calculateDistanceFromOrigin({x: 3, y: 4}))
}

// 抽象类
{
  abstract class Department {
    name: string

    constructor(name: string) {
      this.name = name
    }

    printName() {
      console.log('Department name: ' + this.name)
    }

    abstract printMeeting(): void
  }

  class AccountingDepartment extends Department {
    constructor(name: string) {
      super(name)
    }

    printMeeting() {
      console.log('The Accounting Department meets each Monday at 8:am')
    }

    generateReports() {
      console.log('The Accounting Department is reporting')
    }
  }

  let department: Department
  department = new AccountingDepartment('myAccounting')
  department.printName()
  department.printMeeting()
  // department.generateReports()
}

// 其他
{
  class Greeter {
    static standardGreeting = 'Hello, there'
    greeting: string
    constructor(message?: string) {
      this.greeting = message
    }
    greet() {
      if (this.greeting) {
        console.log('Hello, ' + this.greeting)
      } else {
        console.log(Greeter.standardGreeting)
      }
    }
  }

  let greeter = new Greeter('world')
  let greeter2 = new Greeter()
  greeter.greet()
  greeter2.greet()

  let Greeter2: typeof Greeter = Greeter
  Greeter2.standardGreeting = 'Hey, there'
  let greeter3 = new Greeter2()
  greeter3.greet()
  greeter2.greet()
}