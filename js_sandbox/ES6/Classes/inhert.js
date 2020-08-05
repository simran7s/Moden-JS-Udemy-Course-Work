// Inhertiance and Extending Classes(Sub classes)
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello There ${this.firstName} ${this.greetinglastName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        // Calls Parent Class constructor
        super(firstName, lastName);

        this.phone = phone;
        this.membership = membership;
    }

    static getMembershipCost() {
        return 500;
    }
}

const john = new Customer('John', 'Doe', '905-794-1563', 'Gold');

// Person methods extend to Customer
// console.log(john.greeting);

console.log(Customer.getMembershipCost());