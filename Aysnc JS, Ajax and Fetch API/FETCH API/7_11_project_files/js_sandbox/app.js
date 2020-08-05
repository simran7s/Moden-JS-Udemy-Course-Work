document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// Get Local Text File data
function getText() {
  // Fetch returns a promise so we need a .then
  fetch('test.txt')
    .then(function (res) {
      // if we were dealing with JSON, then we would do res.json
      return (res.text());
    })
    // double .then because we need to take a promise and turn it into text
    .then(function (data) {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
      document.getElementById('output').innerHTML = err;
    });
}

// Get Local JSON data
function getJson() {
  // Fetch returns a promise so we need a .then
  fetch('posts.json')
    .then(function (res) {
      // if we were dealing with JSON, then we would do res.json
      return (res.json());
    })
    // double .then because we need to take a promise and turn it into text
    .then(function (data) {
      let output = '';

      data.forEach(post => {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
      // document.getElementById('output').innerHTML = err;
    });
}

function getExternal() {
  fetch('https://api.github.com/users')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let output = '';
      data.forEach(user => {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      document.getElementById('output').innerHTML = err;
    });

}
