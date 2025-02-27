console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function () {}); // function

const person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }, // arrow function
  greetArrow: () => {
    console.log("Hello, my name is " + this.name);
  },
};
// Object.freeze(person);
Object.seal(person);
delete person.name 
console.log(person.name); // John
