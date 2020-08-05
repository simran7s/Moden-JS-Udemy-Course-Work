let val;

val = document;
// Array of all elements
val = document.all;
// Acceses only third element in DOM
val = document.all[2];
// Number of elements in the DOM
val = document.all.length;
// give us what is stated:
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

// Selecting without selectors
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

// Works with links
val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

// Works with imgs
val = document.images;

// Works with scripts too
val = document.scripts;
val = document.scripts[2].getAttribute("src");

let scripts = document.scripts;

// NEed to turn scripts into an Array so we can use foreach on it
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function (script) {
  console.log(script.getAttribute("src"));
});

console.log(val);
