// 函数类型
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
var myAdd2 = function (x, y) {
    return x + y;
};
var myAdd3 = function (x, y) {
    return x + y;
};
var myAdd4 = function (x, y) {
    return x + y;
};
var myAdd5 = function (x, y) {
    return x + y;
};
myAdd5(1, 2);
// 可选参数 默认参数
{
    function buildName(firstName, lastName) {
        return firstName + ' ' + lastName;
    }
    // let result1 = buildName('Bob')
    // let result2 = buildName('Bob', 'Adams', "SS")
    var result3 = buildName('Bob', 'Adams');
}
{
    function buildName2(firstName, lastName) {
        return firstName + ' ' + lastName;
    }
    var result1 = buildName2('Bob');
    // let result2 = buildName2('Bob', 'Adams', "SS")
    var result3 = buildName2('Bob', 'Adams');
}
{
    function buildName3(firstName, lastName) {
        var restOfName = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            restOfName[_i - 2] = arguments[_i];
        }
        return firstName + ' ' + lastName;
    }
    var result1 = buildName3('Bob');
    var result2 = buildName3('Bob', 'Adams', "SS");
    var result3 = buildName3('Bob', 'Adams');
}
{
    function buildName4(firstName, lastName) {
        if (firstName === void 0) { firstName = 'Will'; }
        if (lastName === void 0) { lastName = 'Smith'; }
        var restOfName = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            restOfName[_i - 2] = arguments[_i];
        }
        return firstName + ' ' + lastName;
    }
    var result1 = buildName4('Bob');
    var result2 = buildName4('Bob', 'Adams', "SS");
    var result3 = buildName4('Bob', 'Adams');
}
// this
{
    var deck = {
        suits: ['hearts', 'spades', 'clubs', 'diamonds'],
        cards: Array(52),
        createCardPicker: function () {
            var _this = this;
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker = deck.createCardPicker();
    var pickedCard = cardPicker();
    console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);
}
// 改进版
{
    var deck = {
        suits: ['hearts', 'spades', 'clubs', 'diamonds'],
        cards: Array(52),
        createCardPicker: function () {
            var _this = this;
            return function () {
                var pickedCard = Math.floor(Math.random() * 52);
                var pickedSuit = Math.floor(pickedCard / 13);
                return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
            };
        }
    };
    var cardPicker = deck.createCardPicker();
    var pickedCard = cardPicker();
    console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit);
}
// this 参数在回调函数里
{
    var Handler = /** @class */ (function () {
        function Handler() {
            var _this = this;
            this.onClickBack = function (e) {
                _this.type = e.type;
            };
        }
        return Handler;
    }());
    var h = new Handler();
    var uiElement = {
        addClickListener: function () {
        }
    };
    uiElement.addClickListener(h.onClickBack);
}
// 重载
{
    var suits_1 = ['hearts', 'spades', 'clubs', 'diamonds'];
    function pickCard(x) {
        if (Array.isArray(x)) {
            var pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        else if (typeof x === 'number') {
            var pickedSuit = Math.floor(x / 13);
            return { suit: suits_1[pickedSuit], card: x % 13 };
        }
    }
    var myDeck = [
        { suit: 'diamonds', card: 2 },
        { suit: 'spades', card: 10 },
        { suit: 'hearts', card: 4 }
    ];
    var pickedCard1 = myDeck[pickCard(myDeck)];
    console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit);
    var pickedCard2 = pickCard(15);
    console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit);
}
