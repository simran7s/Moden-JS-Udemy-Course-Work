let re;
// Literal Chars
re = /hello/; //Not match
re = /hello/i; //match bc case insensitive

// Metachar Symbols
re = /^h/i;          //must start with `h`
re = /World$/i;      //must end with `world`
re = /^Hello$/i;     //must start and end with `hello`
re = /^H.llo$/i;     //Matches any ONE character (wild char for any one char can be inplace of .)
re = /H*llo/i;       //Matches any character 0 or more times (wild card for multiple chars)
re = /gre?a?y/i;     //Optional char (e and a)
re = /gre?a?y\?/i;   //Escape chars(want the ? in the string to match)

// String to match
const str = 'gray?';

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

reTest(re, str)