const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' }
];

// Using ES6 Promises instead of Callbacks


function createPost(post) {
  return new Promise(function (resolve, reject) {
    // Resolve we call when we are done what we are doing
    // Reject we call when we have error we want to throw

    setTimeout(function () {
      posts.push(post);
      // Instead of calling CB we add resolve()
      let error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });


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

// Instead of having the callback parameter, we just add .then(callback) at the end
// Also we can catch errors here
createPost({ title: 'Post Three', body: 'This is post three' }).then(getPosts).catch(function (err) {
  console.log(err);
});