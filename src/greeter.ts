interface Person {
    firstName: string;
    lastName: string;
}
function greeter(person: Person){
    return "Hello " + person.firstName + ' ' + person.lastName;
}

class Student {
    fullName: string;
    constructor(public firstName, public middleName, public lastName) {
        this.fullName = this.firstName + ' ' + this.middleName + ' ' + this.lastName;
    }
}

let user = new Student("Shibu", "m", "Manoharan");;

document.body.innerHTML = greeter(user);

