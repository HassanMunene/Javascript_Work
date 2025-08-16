## What is JavaScript?
JavaScript (often abbreviated as JS) is a high-level, dynamic, and interpreted programming language primarily used for:

    - Adding interactivity to websites (e.g., buttons, forms, animations).

    - Building web applications (frontend frameworks like React, Vue, Angular).

    - Server-side development (Node.js).

    - Mobile apps (React Native, Ionic).

    - Game development (using libraries like Phaser, Three.js).

Key Features of JavaScript:

✔ Multi-paradigm – Supports procedural, object-oriented, and functional programming.
✔ Single-threaded but non-blocking (uses an event loop for asynchronous operations).
✔ Runs in the browser (via engines like V8, SpiderMonkey) and on servers (Node.js).
✔ Dynamically typed (variables don’t need type declarations).
✔ Prototype-based inheritance (instead of classical inheritance like Java/C++).


## What are the data types in JavaScript?
JavaScript has two main categories of data types:
1. Primitive (Value) Types (Immutable)

These are the most basic data types, stored directly in memory.
Type	Description	Example
string	Text data	"Hello", 'JS'
number	Numeric values (integers & decimals)	42, 3.14, NaN
boolean	Logical true or false	true, false
undefined	A variable declared but not assigned	let x; → x is undefined
null	Intentional absence of a value	let y = null;
symbol	Unique, immutable identifier (ES6)	Symbol('id')
bigint	Large integers (ES2020)	12345678901234567890n
2. Non-Primitive (Reference) Types (Mutable)

These are objects and are stored by reference.
Type	Description	Example
object	Key-value pairs	{ name: "Alice", age: 25 }
array	Ordered lists	[1, 2, 3]
function	Callable objects	function greet() { ... }
Key Differences: Primitive vs. Non-Primitive
Feature	Primitive	Non-Primitive
Mutability	Immutable (can’t change)	Mutable (can change)
Storage	Stored by value	Stored by reference
Comparison	Compared by value (5 === 5)	Compared by reference ({} !== {})


## What is the difference between == and ===?
1. == (Loose Equality)

    Checks value only (performs type coercion if types differ).

    Converts types automatically before comparison.

    Can lead to unexpected results due to hidden type conversions.

2. === (Strict Equality)

    Checks both value and type (no type coercion).

    Safer and more predictable (recommended in most cases).

    What is NaN in JavaScript?

    What is undefined vs null?

    What is hoisting in JavaScript?

    What is the difference between let, const, and var?

    What is an arrow function? How is it different from a regular function?

    What is the this keyword in JavaScript?

    What is an IIFE (Immediately Invoked Function Expression)?

    What is the difference between function declaration and function expression?

    What is closure in JavaScript? (Basic Explanation)

    What is event bubbling and event capturing?

    What is the difference between call(), apply(), and bind()?

    What is the DOM? How do you select elements in JavaScript?

Medium Questions (Intermediate Concepts)

    What is the event loop in JavaScript?

    What are promises in JavaScript? How do they work?

    What is async/await? How is it different from promises?

    What is the difference between setTimeout() and setInterval()?

    What is the difference between localStorage, sessionStorage, and cookies?

    What is CORS? How do you handle it?

    What is a higher-order function?

    What is currying in JavaScript?

    What is memoization? How would you implement it?

    What is the difference between shallow copy and deep copy?

    How does prototypal inheritance work in JavaScript?

    What are generators in JavaScript?

    What is the difference between Object.freeze() and Object.seal()?

    What is the Temporal Dead Zone (TDZ) in JavaScript?

    How does JSON.stringify() work? What are its limitations?

Hard Questions (Advanced Topics)

    Explain how JavaScript’s garbage collection works.

    What is the difference between macro tasks and micro tasks in the event loop?

    How would you implement a debounce or throttle function?

    Explain how WeakMap and WeakSet work. How are they different from Map and Set?

    What is the difference between Proxy and Reflect in JavaScript?

    How does JavaScript handle memory leaks? How would you debug them?

    Explain how Symbol works in JavaScript.

    How would you implement a custom Promise from scratch?

    What are Web Workers? How do they work?

    How does JavaScript’s module system work (ES6 modules vs CommonJS)?

    Explain how Object.defineProperty() works.

    How would you optimize a slow-performing JavaScript application?

    What is the difference between for...in and for...of loops?

    How does JavaScript’s prototype chain work in depth?

    How would you implement a reactive programming pattern (like RxJS) in vanilla JavaScript?

Very Hard / System Design & Tricky Questions

    How would you design a frontend framework like React/Vue from scratch?

    How does the Virtual DOM work? How would you implement it?

    Explain how JavaScript engines (V8, SpiderMonkey) optimize code execution.

    How would you implement a state management system like Redux?

    What are Service Workers? How do they enable offline functionality?

    How would you handle real-time updates in a large-scale app (like WebSockets)?

    Explain how BigInt works in JavaScript. What are its limitations?

    How would you implement a JavaScript bundler (like Webpack) from scratch?

    What are tagged template literals? How are they useful?

    How would you implement a secure authentication system in JavaScript?

Bonus: Problem-Solving & Coding Challenges

    Easy:

        Reverse a string.

        Find the largest number in an array.

        Check if a string is a palindrome.

    Medium:

        Implement Array.prototype.map() from scratch.

        Flatten a nested array.

        Find the first non-repeating character in a string.

    Hard:

        Implement Promise.all() from scratch.

        Write a debounce function.

        Deep clone an object (handling circular references).

    Very Hard:

        Implement a pub-sub (event emitter) system.

        Write a function to parse and evaluate mathematical expressions (e.g., "2 + 3 * 4").

        Implement a LRU (Least Recently Used) cache.