// Javascript Objects...

// Object Basics and Literal Notation


// General method of delcaring fields and methods in an object.

var person1 = {
	firstname : "Naveen",
	lastname : "Mannam",
	yob : 1983,
	mob : 07,
	dob : 16,
	age : function calcage() {
		var date = new Date();
		var year = date.getFullYear();
		return year - this.yob;
	}
};

// Accessing using dot notation.
console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.yob);
console.log(person1.mob);
console.log(person1.dob);
console.log(person1.age());


// Accessing using bracket notation.
console.log(person1['firstname']);
console.log(person1['lastname']);
console.log(person1['yob']);
console.log(person1['mob']);
console.log(person1['dob']);
console.log(person1['age']());

// Another method of delcaring fields in quotes and methods in an object.

var person2 = {
	"first-name" : "Naveen",
	"last-name" : "Mannam",
	"year-of-birth" : 1983,
	"month-of-birth" : 07,
	"date-od-birth" : 16,
	"present-age" : function calcage() {
		var date = new Date();
		var year = date.getFullYear();
		return year - this['year-of-birth'];
	}
};

console.log(person2['first-name']);
console.log(person2['last-name']);
console.log(person2['year-of-birth']);
console.log(person2['month-of-birth']);
console.log(person2['date-od-birth']);
console.log(person2['present-age']());
