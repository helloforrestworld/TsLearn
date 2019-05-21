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
{
    function padLeft(value, padding) {
        if (typeof padding === 'number') {
            return Array(padding + 1).join(' ') + value;
        }
        if (typeof padding === 'string') {
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
}
