// Try catch allows our program to not crash, keeps running after error is caught

const user = { email: 'jdoe@gmail.com' };

try {

  // Produce a ReferenceError(not defined function)
  // myFunction();

  // Produce a Type Error
  // null.myFunction();

  // Syntax Error
  // console.log(eval('Hello World'));

  // URIError
  // decodeURIComponent('%');

  // Producing our own error
  if (!user.name) {
    // throw 'User has no name';
    throw new Error('User has no name');
  }
} catch (err) {
  console.log(err);
  console.log(err.name);
  console.log(err.message);
  // Testing type of error
  console.log(err instanceof ReferenceError);
} finally {
  console.log('Finally runs regardless of result in try');
}


console.log('Program Continues...');