// Name spaces collision.

console.log("Team B has been loaded.");

// This method will cause namespace collision at the global scope.

// function customer(firstname,middlename ,lastname) {
// 	this.firstname = firstname;
// 	this.middlename = middlename;
// 	this.lastname = lastname;
// 	this.getFullName = function () {
// 		return this.firstname + " " + this.middlename + " " + this.lastname;
// 	}
// };

var myname = myname || {};
myname.teamb = myname.teamb || {};

myname.teamb.customer = function (firstname,middlename ,lastname) {
	this.firstname = firstname;
	this.middlename = middlename;
	this.lastname = lastname;
	this.getFullName = function () {
		return this.firstname + " " + this.middlename + " " + this.lastname;
	};
	return this;
};