// 函数类型
function add(x:number, y: number): number {
  return x + y
}

let myAdd = function (x: number, y: number):number {
  return x + y
}

let myAdd2: (x: number, y: number) => number = function (x: number, y: number):number {
  return x + y
}

let myAdd3: (x1: number, y1: number) => number = function (x: number, y: number):number {
  return x + y
}

let myAdd4 = function (x: number, y: number):number {
  return x + y
}

let myAdd5: (x1: number, y1: number) => number = function (x, y) {
  return x + y
}

myAdd5(1, 2)

// 可选参数 默认参数
{
  function buildName(firstName: string, lastName: string) {
    return firstName + ' ' + lastName
  }
  // let result1 = buildName('Bob')
  // let result2 = buildName('Bob', 'Adams', "SS")
  let result3 = buildName('Bob', 'Adams')
}

{
  function buildName2(firstName: string, lastName?: string):string {
    return firstName + ' ' + lastName
  }
  let result1 = buildName2('Bob')
  // let result2 = buildName2('Bob', 'Adams', "SS")
  let result3 = buildName2('Bob', 'Adams')
}

{
  function buildName3(firstName: string, lastName?: string, ...restOfName:string[]):string {
    return firstName + ' ' + lastName
  }
  let result1 = buildName3('Bob')
  let result2 = buildName3('Bob', 'Adams', "SS")
  let result3 = buildName3('Bob', 'Adams')
}

{
  function buildName4(firstName = 'Will', lastName = 'Smith', ...restOfName:string[]):string {
    return firstName + ' ' + lastName
  }
  let result1 = buildName4('Bob')
  let result2 = buildName4('Bob', 'Adams', "SS")
  let result3 = buildName4('Bob', 'Adams')
}

// this
{
  let deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
      return () => {
        let pickedCard = Math.floor(Math.random() * 52)
        let pickedSuit = Math.floor(pickedCard / 13)

        return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
      }
    }
  }
  let cardPicker = deck.createCardPicker()
  let pickedCard = cardPicker()

  console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit)
}

// 改进版
{
  interface Card {
    suit: string
    card: number
  }

  interface Deck {
    suits: string[]
    cards: number[]

    createCardPicker (this: Deck): () => Card
  }

  let deck: Deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function (this: Deck) {
      return () => {
        let pickedCard = Math.floor(Math.random() * 52)
        let pickedSuit = Math.floor(pickedCard / 13)

        return { suit: this.suits[pickedSuit], card: pickedCard % 13 }
      }
    }
  }
  let cardPicker = deck.createCardPicker()
  let pickedCard = cardPicker()

  console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit)
}

// this 参数在回调函数里
{
  interface UIElement {
    addClickListener (onClick: (this: void, e: Event) => void): void
  }

  class Handler {
    type: string

    onClickBack = (e: Event) => {
      this.type = e.type
    }
  }

  let h = new Handler()

  let uiElement: UIElement = {
    addClickListener() {
    }
  }

  uiElement.addClickListener(h.onClickBack)
}

// 重载
{
  let suits = ['hearts', 'spades', 'clubs', 'diamonds']

  function pickCard(x: {suit: string; card: number }[]): number
  function pickCard(x: number): {suit: string; card: number }

  function pickCard(x): any {
    if (Array.isArray(x)) {
      let pickedCard = Math.floor(Math.random() * x.length)
      return pickedCard
    } else if (typeof x === 'number') {
      let pickedSuit = Math.floor(x / 13)
      return { suit: suits[pickedSuit], card: x % 13 }
    }
  }

  let myDeck = [
    { suit: 'diamonds', card: 2 },
    { suit: 'spades', card: 10 },
    { suit: 'hearts', card: 4 }
  ]
  let pickedCard1 = myDeck[pickCard(myDeck)];
  console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit)

  let pickedCard2 = pickCard(15)
  console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit)
}