function greeter(person) {
    return "Hello " + person.firstName + ' ' + person.lastName;
}
var Student = /** @class */ (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = this.firstName + ' ' + this.middleName + ' ' + this.lastName;
    }
    return Student;
}());
var user = new Student("Shibu", "m", "Manoharan");
;
document.body.innerHTML = greeter(user);
