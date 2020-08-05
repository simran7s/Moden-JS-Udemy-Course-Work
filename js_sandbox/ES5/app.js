// Constructor Fuction

// Person constructor(starts with capital)

function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);

    // Calculating Age from a Birthday
    this.calcAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

}

const brad = new Person("brad", 36);
const john = new Person('john', 30);

// csl(john.age);
// csl(brad);
// csl(john);

const simran = new Person('Simran', '1-1-2000');
csl(simran.calcAge());


/* 
NOTES:

this. in global scope refers to window obj

this. in local scope refers to object calling the function this is inside of
*/






function csl(text) {
    console.log(text);
}