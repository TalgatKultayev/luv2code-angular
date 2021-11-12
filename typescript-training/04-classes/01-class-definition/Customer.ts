class Customer {

    firstName : string;
    lastName : string;

    constructor(firstName : string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

//let's create an instance

let myCustomer : Customer = new Customer("Tako","Chako");


console.log(myCustomer.firstName);
console.log(myCustomer.lastName);