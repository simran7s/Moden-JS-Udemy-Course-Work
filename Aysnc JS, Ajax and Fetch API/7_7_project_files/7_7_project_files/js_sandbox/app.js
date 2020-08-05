const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }

];
// Syncronous way

/*
function createPost(post) {
  setTimeout(function () {
    posts.push(post);
  }, 2000);
}


function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// Only shows post 1 and 2. Bc takes 2 seconds to create post but 1s to getPosts() so only previously made posts show
createPost({ title: 'Post Three', body: "This is post three" });
getPosts(); 
*/

// Asyncronus Way

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}


function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// Now that createPost() has a callback, we can now have getPosts as the callback then we will get all the new elements.
createPost({ title: 'Post Three', body: "This is post three" }, getPosts);