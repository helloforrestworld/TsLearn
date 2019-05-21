// 默认情况下，类型检查器认为 null 与 undefined 可以赋值给任何类型。 null 与 undefined 是所有其它类型的一个有效值。
// --strictNullChecks
{
    var s = 'foo';
    s = null; // error
    s = undefined; // error
    var sn = 'bar';
    sn = null;
}
console.log('-------');
// 注意，按照 JavaScript 的语义，TypeScript 会把 null 和 undefined 区别对待。string | null，string | undefined 和 string | undefined | null 是不同的类型
// 可选参数和可选属性
{
    var f = function (x, y) {
        return x + (y || 0);
    };
    f(0, 1);
    f(0);
}
