// Object Literals 

var person = {
	firstName: "Naveen",
	lastName: "Mannam",
	state: "Nellore"
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.state);


// Constructor Function Objects

var persons = function (firstName,lastName,state) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.state = state;	
};

var one = new persons("Minny","Mannam","Kavali")


console.log(one.firstName);
console.log(one.lastName);
console.log(one.state);
