class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello There ${this.firstName} ${this.lastName}`;
    }

    calcAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    // Methods where you dont need specific Object(person in this case) properties to use

    // To call, call using Person.addNums(1,2); Just like how Math.abs() or any other math class works
    static addNums(x, y) {
        return x + y;
    }



}

const mary = new Person('Mary', "Poppins", 'Jan 1 2000');
mary.getsMarried('Thompson');


console.log(mary.calcAge());
console.log(mary.greeting());
console.log(mary);


console.log(Person.addNums(1, 2));