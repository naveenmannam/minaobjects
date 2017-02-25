// Javascript Objects work as reference Types and they are not equal

var person1 = {
	name: "Naveen",
	age: 24
};

var person2 = {
	name: "Naveen",
	age: 24
};

// Willl return false as they are not equal.

console.log(person1 == person2);