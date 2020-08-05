// Create a symbol
// NOTE: NOT NEW SMYBOL
const sym1 = Symbol();
// Inside param is just an identifier
const sym2 = Symbol('sym2');

// console.log(sym2);

// No 2 symbols can every be the same
console.log(Symbol() === Symbol());
// Return: false

// Can be converted into string if needed
console.log(`Hello ${sym1.toString()}`);

// Unique Obj Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

// When using vars are properties of an object
// using [] not .

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop4';


// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);


// Symbols are not enuerable in for ... in loops
// for (let i in myObj) {
//     console.log(`${i}: ${myObj[i]}`);
// }


// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({ key: 'prop' }));
// Shows up as empty object
console.log(JSON.stringify({ [Symbol('sym1')]: 'prop' }));