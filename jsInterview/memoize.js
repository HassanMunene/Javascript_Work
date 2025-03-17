// Implementing caching/memoize function

const clumsySquare = (num1, num2) => {
	for (let i = 1; i <= 100000000; i++){}
	return num1 * num2;
}

console.time("First call");
console.log(clumsySquare(9467, 7649));
console.timeEnd("First call");

console.time("Second call");
console.log(clumsySquare(9467, 7649));
console.timeEnd("Second call");

