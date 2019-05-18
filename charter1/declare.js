// var 问题回顾
function f() {
    var a = 10;
    return function () {
        var b = a + 1;
        return b;
    };
}
var g = f();
g();
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
console.log(sumMatrix([[1, 2, 3], [4, 5, 6]]));
// 输出4, 因为i被覆盖了, 第一层循环只走了一次
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 100);
}
// 10 10 10 10 10 10 10 10 10 10 10 10
for (var i = 0; i < 10; i++) {
    ;
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, i * 100);
    })(i);
}
// let声明
// a = 1
var a;
a = 2;
function sumMatrix2(matrix) {
    var sum = 0;
    for (var i_1 = 0; i_1 < matrix.length; i_1++) {
        var currentRow = matrix[i_1];
        for (var j = 0; j < currentRow.length; j++) {
            sum += currentRow[j];
        }
    }
    return sum;
}
// const声明
var date = '2019-12-03';
// date = 2
var mySister = {
    name: 'kitty',
    age: 2
};
// mySister = {}
mySister.name = 'forrest';
// 接口
var input = [1, 2];
var first = input[0], second = input[1];
function f2(_a) {
    var first = _a[0], second = _a[1];
    return first + second;
}
console.log(f2(input));
