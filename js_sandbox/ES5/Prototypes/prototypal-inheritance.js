// Having one object inhert from another

// Person constructor

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person("John", 'Doe');
// console.log(person1.greeting());

// Customer constructor

function Customer(firstName, lastName, phone, membership) {
    // Customer will inhert Person properties
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}
// Inherit Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return customer()
Customer.prototype.constructor = Customer;

// Create Customer
const customer1 = new Customer('Simran', 'Sandhu', '905-794-1563', 'Standard');


// Customer Greeting
Customer.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName} welcome to our store!`
}

console.log(customer1);
console.log(customer1.greeting());
