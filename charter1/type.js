// 布尔值
var isDone = false;
// 数字
var decLiterval = 20;
var hexLiterval = 0x14;
var binaryLiterval = 20;
var octalLiterval = 20;
// 字符串
var userName = 'bob';
var age = 30;
var sentence = "Hello, my name is  " + userName + ",\ni'll be " + (age + 1) + " year old next month\n";
var sentenceOld = 'Hello, my name is ' + userName + ',\n\n' + 'i\'ll be' + age + 1 + 'year old next month';
// 数组
var list = [1, 2, 3];
var list2 = [1, 2, 3];
// 元组
var x;
x = ['string', 2];
// x = [2, 'string']
// x = ['string', 2, 3]
// x[2] = 1
// console.log(x[0].substr);
// console.log(x[1].substr);
// enum 枚举类型
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green; // 2
var colorName = Color[2];
