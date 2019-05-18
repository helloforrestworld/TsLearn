var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'hello ' + person.fullName;
}
var user = new User('Forrest', 'Lau');
console.log(greeter(user));
