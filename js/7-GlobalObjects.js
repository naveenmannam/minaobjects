// Global object prototype
var firstname = "Minny";
var lastname = "Susmitha";


var person = {
	firstname: "Naveen",
	lastname: "Mannam",
	age: 23,
	search: {
		disp: function () {
			console.log("Inside the search.");
		}
	}
};

Object.prototype.greet = function () {
	console.log("Hello, This is under global prototype.");
};


Object.prototype.greetsVoid = function () {
	console.log("Hello, " + this.firstname + " " + this.lastname + " This is under global prototype.");
};

Object.prototype.greetsReturn = function () {
	console.log("Hello, " + firstname + " " + lastname + " This is under global prototype.");
};



person.greet();
person.greetsVoid();
person.greetsReturn("Rohi", "Suhas");
greet();
greetsVoid();
greetsReturn();
person.search.greet();