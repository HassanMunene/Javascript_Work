// currying in js
// lets convert this normal function f(a, b) into f(a)(b)
// in Currying a function takes one argument at a time and returns
// another function expecting the next argument

//The example below is a normal function
function f(a, b) {
	console.log(a, b);
}

f(2, 3);

// the example below is a normal function converted to currying

function f2(a) {
	return function(b) {
		console.log(a, b);
	}
}

f2(2)(3);
