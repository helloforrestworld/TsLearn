var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 类
{
    var Greeter = /** @class */ (function () {
        function Greeter(message) {
            this.greeter = message;
        }
        Greeter.prototype.greet = function () {
            console.log('Hello, ' + this.greeter);
        };
        return Greeter;
    }());
    var greeter = new Greeter('forrest');
    greeter.greet();
}
// 继承
{
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.move = function (distance) {
            if (distance === void 0) { distance = 0; }
            console.log("Animal move " + distance + "m");
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Dog.prototype.bark = function () {
            console.log('Woof, Woof!');
        };
        return Dog;
    }(Animal));
    var dog = new Dog();
    dog.bark();
    dog.move(100);
}
{
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.move = function (distance) {
            if (distance === void 0) { distance = 0; }
            console.log(this.name + " moved " + distance + "m");
        };
        return Animal;
    }());
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            return _super.call(this, name) || this;
        }
        Snake.prototype.move = function (distance) {
            if (distance === void 0) { distance = 5; }
            console.log('Slithering...');
            _super.prototype.move.call(this, distance);
        };
        return Snake;
    }(Animal));
    var Horse = /** @class */ (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            return _super.call(this, name) || this;
        }
        Horse.prototype.move = function (distance) {
            if (distance === void 0) { distance = 100; }
            console.log('Galloping...');
            _super.prototype.move.call(this, distance);
        };
        return Horse;
    }(Animal));
    var sandy = new Snake('sandy');
    var tommy = new Horse('tommy');
    sandy.move();
    tommy.move(365);
}
// 公共，私有与受保护 + readonly修饰符
{
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        return Animal;
    }());
    var animal = new Animal('Andy');
    // error
    // animal.name
    var Rhino = /** @class */ (function (_super) {
        __extends(Rhino, _super);
        function Rhino(name) {
            return _super.call(this, name) || this;
        }
        Rhino.prototype.sayMyName = function () {
            // 派生类不能访问私有属性
            // console.log(super.name)
        };
        return Rhino;
    }(Animal));
    var Employee = /** @class */ (function () {
        function Employee(name) {
            this.name = name;
        }
        return Employee;
    }());
    var animalBob = new Animal('bob');
    var rhino = new Rhino('rhino');
    var employee = new Employee('forrest');
    animalBob = rhino; // 没啥问题
    // animalBob = employee // 不兼容
}
{
    // protected 修饰符与 private 修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(name, department) {
            var _this = _super.call(this, name) || this;
            _this.department = department;
            return _this;
        }
        Employee.prototype.getElevatorPitch = function () {
            console.log("Hello, my name is " + this.name + ", my department is " + this.department);
        };
        return Employee;
    }(Person));
    var employee1 = new Employee('Jane', 'Sales');
    employee1.getElevatorPitch();
}
{
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var john = new Person('john');
    // john.name = 1
    var Boy = /** @class */ (function (_super) {
        __extends(Boy, _super);
        function Boy(name, tall) {
            var _this = _super.call(this, name) || this;
            _this.tall = tall;
            return _this;
        }
        Boy.prototype.changeName = function (name) {
            // this.name = name
        };
        return Boy;
    }(Person));
}
{
    // 参数属性
    var Person = /** @class */ (function () {
        // private readonly name: string
        function Person(name) {
            this.name = name;
            // this.name = name
        }
        return Person;
    }());
}
// 存取器
{
    var secretCode_1 = '0xx0';
    var Employee = /** @class */ (function () {
        function Employee(fullName) {
            this._fullName = fullName;
        }
        Object.defineProperty(Employee.prototype, "fullName", {
            get: function () {
                return this._fullName;
            },
            set: function (newName) {
                if (secretCode_1 && secretCode_1 === '0xx0') {
                    this._fullName = newName;
                }
                else {
                    console.log("Error: Unauthorized update of employee");
                }
            },
            enumerable: true,
            configurable: true
        });
        return Employee;
    }());
    var employee = new Employee('John Snow');
    employee.fullName = 'Rhiannon J';
    console.log(employee.fullName);
}
// 静态属性
{
    var Grid_1 = /** @class */ (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDis = point.x - Grid.origin.x;
            var yDis = point.y - Grid.origin.y;
            return Math.sqrt(xDis * xDis + yDis * yDis) * this.scale;
        };
        Grid.origin = { x: 0, y: 0 };
        return Grid;
    }());
    var grid1 = new Grid_1(1.0);
    var grid2 = new Grid_1(5.0);
    console.log(grid1.calculateDistanceFromOrigin({ x: 3, y: 4 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 3, y: 4 }));
}
// 抽象类
{
    var Department = /** @class */ (function () {
        function Department(name) {
            this.name = name;
        }
        Department.prototype.printName = function () {
            console.log('Department name: ' + this.name);
        };
        return Department;
    }());
    var AccountingDepartment = /** @class */ (function (_super) {
        __extends(AccountingDepartment, _super);
        function AccountingDepartment(name) {
            return _super.call(this, name) || this;
        }
        AccountingDepartment.prototype.printMeeting = function () {
            console.log('The Accounting Department meets each Monday at 8:am');
        };
        AccountingDepartment.prototype.generateReports = function () {
            console.log('The Accounting Department is reporting');
        };
        return AccountingDepartment;
    }(Department));
    var department = void 0;
    department = new AccountingDepartment('myAccounting');
    department.printName();
    department.printMeeting();
    // department.generateReports()
}
// 其他
{
    var Greeter_1 = /** @class */ (function () {
        function Greeter(message) {
            this.greeting = message;
        }
        Greeter.prototype.greet = function () {
            if (this.greeting) {
                console.log('Hello, ' + this.greeting);
            }
            else {
                console.log(Greeter.standardGreeting);
            }
        };
        Greeter.standardGreeting = 'Hello, there';
        return Greeter;
    }());
    var greeter = new Greeter_1('world');
    var greeter2 = new Greeter_1();
    greeter.greet();
    greeter2.greet();
    var Greeter2 = Greeter_1;
    Greeter2.standardGreeting = 'Hey, there';
    var greeter3 = new Greeter2();
    greeter3.greet();
    greeter2.greet();
}
