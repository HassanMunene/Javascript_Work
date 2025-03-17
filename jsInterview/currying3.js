function evaluate(operation) {
	if (operation === "sum") {
		return function(a) {
			return function(b){
				return a + b;
			}
		}
	} else if (operation === "multiply"){
		return function(a){
			return function(b){
				return a * b;
			}
		}
	} else if (operation === "divide"){
		return function(a){
			return function(b){
				return a / b;
			}
		}
	} else if (operation === "substract"){
		return function(a){
			return function(b){
				return a - b;
			}
		}
	}

}

console.log(evaluate("sum")(4)(2));
console.log(evaluate("multiply")(4)(2));
console.log(evaluate("substract")(4)(2));
console.log(evaluate("divide")(4)(2));

