interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }

}
async function myAdd(x: number, y: number) {
    return x + y;
}
async function myAdd2() {
    let abc = await myAdd(2, 3);
    return abc;
}
myAdd2().then((num: Number) => {
    console.info(num);
});
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Rajesh", "Aravapalli", "User");

document.body.innerHTML = greeter(user);
