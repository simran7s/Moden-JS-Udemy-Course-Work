// ES5 version

function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  // Works with arrow function
  // But in ES5 we just use a var called self or that and point to this.
  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

// Make an HTTP POST Request
easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    // Dont need to check status in post request
    callback(null, self.http.responseText);
  }

  // When send is used in POST request we need to actually send some data
  // That data we need to convert into JSON using the method below so it is compatiable
  this.http.send(JSON.stringify(data));
}
// Make an HTTP PUT Request
easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);
  // Dont know why but you need this header
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}
// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);

  // Works with arrow function
  // But in ES5 we just use a var called self or that and point to this.
  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      // If we left responseText, it returns empty object
      callback(null, "Post Deleted");
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}