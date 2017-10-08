// Creating Prototypes for Objects

var myObj = function (name, age, city) {

};

myObj.prototype.name = "Name";
myObj.prototype.age = 0;
myObj.prototype.city = "City";
myObj.prototype.display = function () {
	console.log(this.name + " is " + this.age + " years old and " + "lives in " + this.city);
};

var person1 = new myObj();
person1.name = "Minny";
person1.age = 26;
person1.city = "Nellore";

var person2 = new myObj();
person2.name = "Naveen";
person2.age = 34;
person2.city = "Kavali";

person1.display();
person2.display();