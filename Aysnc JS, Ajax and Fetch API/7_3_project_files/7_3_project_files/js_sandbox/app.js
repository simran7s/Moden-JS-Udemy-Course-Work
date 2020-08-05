document.getElementById('button').addEventListener("click", loadData);


function loadData() {
  // Create an XHR Obj
  const xhr = new XMLHttpRequest();

  // OPEN
  //  .open(type of request, file we are calling on, T/F async?)
  // GET reuqest reads data.txt
  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE', xhr.readyState);

  // Optional - Used for Spinners/loaded (Add those spinners here)
  xhr.onprogress = function () {
    // console.log('READYSTATE', xhr.readyState);

    // Making div with #output have a h1 with data.txt text in it.
    document.getElementById('output').innerHTML =
      `<h1>${this.responseText}</h1>`;
  }



  // Optional - use when something goes wrong
  xhr.onerror = function () {
    console.log('READYSTATE', xhr.readyState);
  }

  // When everything is ready 
  xhr.onload = function () {
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) {
      // We console log the data.txt text
      console.log(this.responseText);
    }
  }

  // // Before we used to also have to check readyState value === 4
  // xhr.onreadystatechange = function () {
  //   console.log('READYSTATE', xhr.readyState);
  //   if (this.status === 200 && this.readyState == 4) {
  //     console.log(this.responseText);
  //   }
  // }
  xhr.send();

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request recieved
  // 3: processing request
  // 4: request finished and response is ready





  // HTTP STATUSES
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}