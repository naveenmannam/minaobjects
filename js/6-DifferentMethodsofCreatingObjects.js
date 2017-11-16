/*Different Methods of Object Creation.

1 - Constructor Pattern
2 - Factory Pattern
3 - Prototype Pattern
4 - Dynamic Prototype Pattern

As javascript has no concept called as classes, we will create an object first and then will use that one to create a new objects
from it.

*/

// Factory pattern.

var factoryMetod = function(firstName, lastName, age) {
  var temp = {};
  temp.firstName = firstName;
  temp.lastName = lastName;
  temp.age = age;
  temp.displayDetails = function() {
    console.log(
      temp.firstName + " " + temp.lastName + " is " + temp.age + " years old."
    );
  };
  return temp;
};

var personOne = factoryMetod("Minny", "Mannam", 26);
var personTwo = factoryMetod("Naveen", "Mannam", 33);

personOne.displayDetails();
personTwo.displayDetails();

//Constructor Method.

var constMetod = function(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.displayDetails = function() {
    console.log(
      this.firstName + " " + this.lastName + " is " + this.age + " years old."
    );
  };
};

var personOne = new constMetod("Naveen", "Mannam", 33);
var personTwo = new constMetod("Minny", "Mannam", 26);

personOne.displayDetails();
personTwo.displayDetails();

// Prototype Pattern

var protoMethod = function() {};

protoMethod.prototype.firstName = "First Name";
protoMethod.prototype.lastName = "Last Name";
protoMethod.prototype.age = 0;
protoMethod.prototype.displayDetails = function() {
  console.log(
    this.firstName + " " + this.lastName + " is " + this.age + " years old."
  );
};

var personOne = new protoMethod();
//personOne.firstName = "Naveen";
personOne.lastName = "Mannam";
personOne.age = 33;

var personTwo = new protoMethod();
personTwo.firstName = "Minny";
personTwo.lastName = "Susmitha";
personTwo.age = 26;

personOne.displayDetails();
personTwo.displayDetails();

// By this method we can check if the property is present in the object or in the prototype or not.
// Will result true if ite either present in object or prototype and false if not present in object and prototype.
console.log("firstName" in personOne);
console.log("firstName" in personTwo);

// By this method we can check if the property is present in a given object or not.
// Should return true if its present in object and false if not present in Object.
console.log(personOne.hasOwnProperty("firstName"));
console.log(personTwo.hasOwnProperty("firstName"));

//Dynamic Prototype pattern.

var dynamicProto = function(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  // Check if a function names display Details exits or not and if its not present , the function will be created under
  // dynamicProto as a prototype function.
  if (typeof this.displayDetails !== "function") {
    dynamicProto.prototype.displayDetails = function() {
      console.log(
        this.firstName + " " + this.lastName + " is " + this.age + " years old."
      );
    };
  }
};

// Once an object is created, the displayDetails function will be created for the first time and there on it will be used for consequent objects.

var personOne = new dynamicProto("Naveen", "Mannam", 33);
var personTwo = new dynamicProto("Minny", "Mannam", 23);

personOne.displayDetails();
personTwo.displayDetails();
console.log("firstName" in personOne);
console.log("firstName" in personTwo);

console.log("firstName" in personOne);
console.log(personOne.hasOwnProperty("firstName"));
console.log(dynamicProto.hasOwnProperty("firstName"));
