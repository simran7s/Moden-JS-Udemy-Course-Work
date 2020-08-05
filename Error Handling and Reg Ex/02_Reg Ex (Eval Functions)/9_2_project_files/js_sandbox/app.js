// Var init for regular expression
let re;
re = /hello/;
re = /hello/i; // i = case insensitive
// re = /hello/g; //Global Search -lots for all instances of reg ex in input


// logs `/hello/`
// console.log(re);
// logs `hello`
// console.log(re.source);

// Functions for Evaling Reg Ex


// 01 --- exec() - return result in an array or null
/*
const result = re.exec('helloworld');
console.log(result);

// Get Reg Ex
console.log(result[0]);
// Get index
console.log(result.index);
// Get input
console.log(result.input);
// Returned:
*/
/*
    SUCCESS:
    ["hello", index: 0, input: "hello world", groups: undefined]
    [expression, index of start, message]

    FAIL:
    null
*/


// 02 --- test() - returns T or F

// Case MAtters
// const result = re.test('Hello');
// console.log(result);


// 03 --- match() Return result array or null
// const str = 'Hell There';
// const result = str.match(re);
// console.log(result);

// returns:
/*
    ["Hello", index: 0, input: "Hello There", groups: undefined]

    null
*/

//04 --- search() - returns start index of first match. or not found returns -1
// const str = 'Brad Hello There';
// const result = str.search(re);
// console.log(result);

// return
/*
    5
*/


// 05 --- replace() - returns new string where all inputs matching re pattern in str are replaced with something else that is indicated('hi')
const str = 'Whats Up There';
const newStr = str.replace(re, 'Hi');
console.log(newStr);