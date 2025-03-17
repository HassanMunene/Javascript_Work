function add(a) {
    return function(b) {
        if (b !== undefined) { // Explicitly check if b is provided
            return add(a + b); // Keep currying
        }
        return a; // If b is not provided, return the accumulated result
    };
}

console.log(add(1)(2)()); // Output: 3
console.log(add(1)(2)(3)(4)()); // Output: 10
