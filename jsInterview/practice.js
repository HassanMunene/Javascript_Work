const user = {name: "Alice", age: 20 }

function greet({name, age}) {
	console.log(`Hello there ${name} you are ${age}`);
}

greet(user);
