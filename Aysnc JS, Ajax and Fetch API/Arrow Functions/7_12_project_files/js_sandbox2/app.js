// const sayHello = function () {
//     console.log('Hello');
// }

// Arrow Function V1
/*
 const sayHello = () => {
    console.log('Hello');
} 
*/

// Arrow Fxn V2 (one line. No need for {})
// const sayHello = () => console.log('hello');

// Arrow Fxn V3 (one line. no need to write "return 'hello'")
// const sayHello = () => 'Hello';

// One Line return Object Literal. (You need ({object: ''}))
// const sayHello = () => ({ msg: 'Hello' });

// single line with 1 param
// const sayHello = (name) => console.log(`Hello ${name}`);

// Alt to above(no need for () around paramater name)
// const sayHello = name => console.log(`Hello ${name}`);

// Multi param, needs () around params
const sayHello = (first, last) => console.log(`Hello ${first} ${last}`);

// sayHello('Brad', 'Traversy');


const users = ['Nathan', "John", 'Will'];

// Regular Fxn
// const nameLengths = users.map(function (name) {
//     return name.length
// });

// Shorter
// const nameLengths = users.map((name) => {
//     return name.length
// });

// Arrow Fxn Version(Shortest)
const nameLengths = users.map(name => name.length);

console.log(nameLengths);