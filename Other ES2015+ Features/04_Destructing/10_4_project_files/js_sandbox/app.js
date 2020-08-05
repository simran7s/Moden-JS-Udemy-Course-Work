// Destructuring Assignment

let a, b;
[a, b] = [100, 200];

// Rest Pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500]; // Rest is assigned all remaining values in array

// console.log(a); //returns: 100
// console.log(b); //returns: 200

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });


// console.log(rest) // Returns {c: 300, d: 400, e: 500}

// Array Destructring
// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);


// Parse Array returns from function
// function getPeople() {
//   return ['John', 'Beth', 'Mike'];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();
// console.log(person1, person2, person3);


// Object Destrucring

const person = {
  name: 'John Doe',
  age: 22,
  city: 'Brampton',
  gender: 'Male',
  sayHello: function () {
    console.log('Hello');
  }
}


// Old ES5 way
// const name = person.name,
//       age = person.age,
//       city = person.city;

// NEW ES6 way
const { name, age, city } = person;

console.log(name, age, city);
person.sayHello();