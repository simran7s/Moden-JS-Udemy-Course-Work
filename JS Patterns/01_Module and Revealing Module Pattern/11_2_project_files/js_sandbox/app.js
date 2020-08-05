// Basic Structure

// (function () {
//   // Declare private vars and fxns

//   return {
//     // declare public var and fxns
//   }
// })();

// Standard MODULE PATTERN
// const UICtrl = (function () {
//   let text = 'Hello World';

//   const changeText = function () {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function () {
//       changeText();
//       console.log(text);
//     }
//   }
// })()

// UICtrl.callChangeText();


// REVEALING MODULE PATTERN
const ItemCtrl = (function () {
  let _data = []; //_ is for private vars

  function add(item) {
    _data.push(item);
    console.log(`${item} added`);
  }

  function get(id) {
    return _data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add, //These become public
    get: get  //public now
  }
})();

ItemCtrl.add({ id: 1, name: 'John' });
ItemCtrl.add({ id: 2, name: 'Mark' });
console.log(ItemCtrl.get(1));