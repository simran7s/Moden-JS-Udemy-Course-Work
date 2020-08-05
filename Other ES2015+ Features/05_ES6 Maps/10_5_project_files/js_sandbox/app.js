// MAPS - key-value pairs: can use any type as a key or value

const map1 = new Map();

// Set Keys
const key1 = 'some string',
    key2 = {},
    key3 = function () { };

// Set Map values by Key
map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key3');


// Get values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// // Count Values
// console.log(map1.size);

// Iterating MAPS

// Loops using for...of to get keys and values
// for (let [key, value] of map1) {
//     console.log(`${key} = ${value}`);
// }

// Iterate Keys only
// for (let key of map1.keys()) {
//     console.log(key);
// }

// Iterate values only
// for (let value of map1.values()) {
//     console.log(value);
// }

// Loop with foreach
// map1.forEach(function (value, key) {
//     console.log(`${key} = ${value}`);
// });


// Convert to Arrays

// Create Array of key value pairs

// const keyValArr = Array.from(map1);
// console.log(keyValArr);

// Create Array of values

const valArr = Array.from(map1.values);
console.log(valArr.values);

// Create Array of keys

const keyArr = Array.from(map1.keys);
console.log(keyArr.keys);
