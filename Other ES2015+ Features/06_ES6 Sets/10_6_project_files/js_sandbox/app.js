// SETS - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A String');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100);  //Since already in set, will not be re-added

// Another way to init
// const set2 = new Set([1, true, 'String']);


// console.log(set1);

// Get count
// console.log(set1.size);

// Check for values
// console.log(set1.has(100));
// console.log(set1.has(50 + 50)); //Can do expression too
// console.log({ name: 'John' }); //cant check objects like this(ref value)


// Delte from set
// set1.delete(100);
// console.log(set1);//100 no longer in it

// Iterating through sets

// For...of (both .values and .keys do the same as just set1)
// for (let item of set1) {
//     console.log(item);
// }
// for (let item of set1.keys()) {
//     console.log(item);
// }
// for (let item of set1.values()) {
//     console.log(item);
// }

// For each loop
// set1.forEach((val) => {
//     console.log(val);
// })

// convert set to array
const setArr = Array.from(set1);
console.log(setArr);
