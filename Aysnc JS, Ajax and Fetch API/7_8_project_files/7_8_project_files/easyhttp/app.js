const http = new easyHTTP();

// GET POSTS
// Requires async with callback
// Also added err to callback function, so if there is err, we will know

/* 
http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
  if (err) {
    console.log(err)
  } else {
    console.log((posts));
  }
}); 
*/


// GET SINGLE POST
/* 
http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
  if (err) {
    console.log(err)
  } else {
    console.log((post));
  }
});
*/


// Create Data
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};


// POST 
/* http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
  if (err) {
    console.log(err)
  } else {
    console.log((post));
  }
}); */

// Update Post(PUT)
/* http.put('https://jsonplaceholder.typicode.com/posts/5', data, function (err, post) {
  if (err) {
    console.log(err)
  } else {
    console.log((post));
  }
}) */


// Delete
// If it returns 
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
  if (err) {
    console.log(err)
  } else {
    console.log((response));
  }
}); 