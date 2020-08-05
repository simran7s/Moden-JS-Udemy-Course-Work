const name1 = 'Jeff';
const name2 = new String('Jeff');

// console.log(name1);
// console.log(name2);


// With constructor String we can add extra properties
// name2.foo = "bar";
// console.log(name2);

// Problems with using this


// String
// console.log(typeof name1);
// Object
// console.log(typeof name2);



// === just value and if name2 is also String type
// == would say yes because it only compares values
// if (name2 === 'Jeff') {
//     console.log('Yes');
// } else {
//     console.log('No');
// }



// Numbers
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);


// Function
const getSum1 = function (x, y) {
    return x = y;
}
const getSum2 = new Function('x', 'y', 'return 1 + 1');


// Object
const john1 = { name: "John" };
const john2 = new Object({ name: "John" });

// Array
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);


// Reg Ex
const re1 = /\w+/;
// Have to escape \ with another \ to have \ show. 
const re2 = new RegExp('\\w+');


console.log(re2);

