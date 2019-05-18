function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
function createSquare(squareConfig) {
    var _a = squareConfig.color, color = _a === void 0 ? 'red' : _a, _b = squareConfig.width, width = _b === void 0 ? 100 : _b;
    return {
        color: color,
        area: width * 2
    };
}
console.log(createSquare({ color: 'yellow' }));
