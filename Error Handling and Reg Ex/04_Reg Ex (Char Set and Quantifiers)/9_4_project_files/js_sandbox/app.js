let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;           // Must start with
re = / world$/i;     // Must ends with
re = /^hello$/i;     // Must begin and end with
re = /h.llo/i;      // Matches any ONE character
re = /h*llo/i;      // Matches any character 0 or more times
re = /gre?a?y/i;    // Optional  (problem: gry and greay would also be accepted)
re = /gre?a?y\?/i;    // Escape character 

// Brackets [] - Character Sets
re = /gr[ae]y/i;    //one of any char in []'s (a or e not both)
re = /[GF]ray/;    // must be G or F capital
re = /[^GF]ray/i;    //anything BUT G or F (NOTE:^ inside [] means NOT)
re = /[A-Z]ray/;    //Match any upcase letter 
re = /[a-z]ray/;    //Match any lowercase letter 
re = /[A-Za-z]ray/;    //Match any letter 
re = /[0-9]ray/;    //Match any digit (NOTE: 10ray works but '0ray') 


// Braces {} - Quantifiers
re = /Hel{2}o/i;    // checks for exactly {m} amount of a letter
re = /Hel{2,4}o/i;    // checks for exactly {m - n } amount of a letter (2-4 times)
re = /Hel{2,}o/i;    // checks for atleast {m} times of letter

// Paretheses () - Grouping
re = /([0-9]x){3}/i;    //checks for a pattern inside () happening {m} times 
re = /([0-9]x){3}$/i;    //checks for a pattern inside () happening {m} times and nothing after it


// String to match
const str = '3x3x3x';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);