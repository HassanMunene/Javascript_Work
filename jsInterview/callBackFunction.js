function greet(name, callback) {
	console.log(`Hello my name is ${name}`);
	callback();
}

function callback() {
	console.log("Hello this is the callback function");
}

greet("Hassan", callback);
