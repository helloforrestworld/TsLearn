class User {
  firstName: string
  lastName: string
  fullName: string
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = firstName + ' ' + lastName
  }
}


interface Person {
  firstName: string
  lastName: string,
  fullName: string
}

function greeter(person: Person) {
  return 'hello ' + person.fullName
}

const user = new User('Forrest', 'Lau')
console.log(greeter(user))
