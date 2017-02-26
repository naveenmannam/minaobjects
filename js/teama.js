// Name spaces collision.
console.log("Team A has been loaded.");


// This method will cause namespace collision at the global scope.

// function customer(firstname, lastname) {
// 	this.firstname = firstname;
// 	this.lastname = lastname;
// 	this.getFullName = function () {
// 		return this.firstname + " " + this.lastname;
// 	}
// };

var myname = myname || {};
myname.teama = myname.teama || {};

myname.teama.customer = function (firstname, lastname) {
	this.firstname = firstname;
	this.lastname = lastname;
	this.getFullName = function () {
		return this.firstname + " " + this.lastname;
	};
	return this;
};


