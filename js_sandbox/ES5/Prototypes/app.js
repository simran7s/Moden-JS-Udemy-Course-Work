// Object.prototype
// Person.prototype

// Person Constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);

    // Calculating Age from a Birthday
    // this.calcAge = = function () {
    //     const diff = Date.now() - this.birthday.getTime();
    //     const ageDate = new Date(diff);
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}

// ----------------------------------
// Prototype Methods: We put functions inside of the prototype
// ---------------------------------

// Calculate Age
Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get Full Name

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
}


// Gets Married

Person.prototype.getMarried = function (newLastName) {
    this.lastName = newLastName;
}


const john = new Person('John', "Doe", "8-12-90");
const mary = new Person('Mary', "Johnson", "March 20 1978");

console.log(john.calculateAge());
console.log(mary.getFullName());
mary.getMarried("Smith");
console.log(mary.getFullName());


// Using Object Prototype methods in our Person constructor

// Boolean if mary has property firstName
console.log(mary.hasOwnProperty('firstName'));

// False because getFullName() is in the prototype
console.log(mary.hasOwnProperty('getFullName()'));