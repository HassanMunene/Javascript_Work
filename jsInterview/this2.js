// How to use call(), apply(), bind() to manipulate what "this" refers to in a function

function greet() {
	console.log("Hello my name is " + this.name);
}

const person = {name: "Hassan"};

// greet.call(person)

greet.call(person);
