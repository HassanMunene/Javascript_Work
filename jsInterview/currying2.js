// How to implement this sum: sum(2)(6)(1)
// The function should sum all the parameters provided in the parenthesis

function sum(a) {
	return function(b) {
		return function(c) {
			console.log(a + b + c);
		}
	}
}

sum(2)(6)(1);
