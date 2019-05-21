// 交叉类型
{
    function extend(first, second) {
        var result = {};
        for (var id in first) {
            result[id] = first[id];
        }
        for (var id in second) {
            if (!result.hasOwnProperty(id)) {
                result[id] = second[id];
            }
        }
        return result;
    }
    var firstObj = { a: 1, c: 3 };
    var secondObj = { a: 2, b: 2, d: 5 };
    console.log(extend(firstObj, secondObj));
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var ConsoleLogger = /** @class */ (function () {
        function ConsoleLogger() {
        }
        ConsoleLogger.prototype.log = function () {
            console.log(1);
        };
        return ConsoleLogger;
    }());
    var jim = extend(new Person('Jim'), new ConsoleLogger());
    jim.name;
    jim.log();
}
// 联合类型
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value;
    }
    if (typeof padding === 'string') {
        // padding.substr
        return padding + value;
    }
    throw new Error('Expected string or number, got ' + padding + '.');
}
function getSmallPet() {
    return {};
}
var pet = getSmallPet();
// pet.fly
pet.layEggs;
// 类型保护
if (pet.swim) {
    pet.swim();
}
else {
    pet.fly();
}
// 用户自定义的类型保护
function isFish(pet) {
    return pet.swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
// typeof 类型保护
function padLeft1(value, padding) {
    if (typeof padding === 'string') {
        padding.substr;
        return padding + value;
    }
}
// instanceof 类型保护
{
    var Bird_1 = /** @class */ (function () {
        function Bird() {
        }
        Bird.prototype.fly = function () {
            console.log('bird fly');
        };
        Bird.prototype.layEggs = function () {
            console.log('bird lay eggs');
        };
        return Bird;
    }());
    var Fish_1 = /** @class */ (function () {
        function Fish() {
        }
        Fish.prototype.swim = function () {
            console.log('fish swim');
        };
        Fish.prototype.layEggs = function () {
            console.log('fish lay eggs');
        };
        return Fish;
    }());
    function getRandomPet() {
        return Math.random() > 0.5 ? new Bird_1() : new Fish_1();
    }
    var pet_1 = getRandomPet();
    if (pet_1 instanceof Bird_1) {
        pet_1.fly();
    }
    if (pet_1 instanceof Fish_1) {
        pet_1.swim();
    }
}
// 可为null的值
