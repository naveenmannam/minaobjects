// General method of delcaring fields and methods in an object.

var yob = 1990;

var person1 = {
	firstname : "Naveen",
	lastname : "Mannam",
	yob : 1983,
	mob : 07,
	dob : 16,
	inter: {
		yob: 1980,
		ageinter : function calcage() {
			var date = new Date();
			var year = date.getFullYear();
			return year - yob;
		},
		ageinterthis : function calcage() {
			var date = new Date();
			var year = date.getFullYear();
			return year - this.yob;
		}
	},
	agelocal : function calcage() {
		var date = new Date();
		var year = date.getFullYear();
		return year - this.yob;
	},
	ageglobal : function calcage() {
		var date = new Date();
		var year = date.getFullYear();
		return year - yob;
	}
};

// Accessing using dot notation.
console.log(person1.firstname);
console.log(person1.lastname);
console.log(person1.yob);
console.log(person1.mob);
console.log(person1.dob);
console.log(person1.agelocal());


// Changing the field properties out side of the object.

person1.firstname = "Minny";
person1.lastname= "Susmitha";


console.log(person1.firstname);
console.log(person1.lastname);

//Getting the age wih local this value of age.


console.log(person1.agelocal());

//Getting hte age with internal value ofa age.

console.log(person1.inter.ageinter());

//Getting hte age with internal this value ofa age.

console.log(person1.inter.ageinterthis());

//Getting hte age with global this value ofa age.

console.log(person1.ageglobal());