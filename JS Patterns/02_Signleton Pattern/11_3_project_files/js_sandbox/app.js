// Singleton Patten
const Singleton = (function () {
  let instance;
  function createInstance() {

    const object = new Object({ name: 'Simran' });
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }


})();


const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

// console.log(instanceA);
console.log(instanceA === instanceB); //always true (cant have more than one instance)