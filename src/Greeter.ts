// interface Person {
//     firstName: string;
//     lastName: string;
// }

// class Student {
//     fullName: string;
//     constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }

// }
// async function myAdd(x: number, y: number): Promise<number> {
//     return x + y;
// }
// async function myAdd2() {
//     let abc = await myAdd(2, 3);
//     return abc;
// }
// myAdd2().then((num: number) => {
//     console.info(num);
// });
// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }

// var user = new Student("Rajesh", "Aravapalli", "User");

// document.body.innerHTML = greeter(user);
//https://jsonplaceholder.typicode.com/users

class CustomError extends Error{
    constructor(response?: Response, message?: string){
        super(message);
        console.log(response);
    }
}

fetch("https://httpstat.us/400").then((response: Response): Promise<JSON> => {
    if (response.ok) {
        return response.json();
    } else {
        throw new CustomError(response, 'Something went wrong');
    }
})
    .then((responseJson: JSON) => {
        console.log(responseJson);
    })
    .catch((error: CustomError) => {
        console.log(error)
    });
