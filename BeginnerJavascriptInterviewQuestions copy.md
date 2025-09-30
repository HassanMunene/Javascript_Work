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
Type	    Description	Example
string	    Text data	"Hello", 'JS'
number	    Numeric values (integers & decimals)	42, 3.14, NaN
boolean	    Logical true or false	true, false
undefined	A variable declared but not assigned	let x; → x is undefined
null	    Intentional absence of a value	let y = null;
symbol	    Unique, immutable identifier (ES6)	Symbol('id')
bigint	    Large integers (ES2020)	12345678901234567890n

2. Non-Primitive (Reference) Types (Mutable)

These are objects and are stored by reference.
Type	    Description	Example
object	    Key-value pairs	{ name: "Alice", age: 25 }
array	    Ordered lists	[1, 2, 3]
function	Callable objects	function greet() { ... }

Key Differences: Primitive vs. Non-Primitive
Feature	Primitive	          Non-Primitive
Mutability	                  Immutable (can’t change)	Mutable (can change)
Storage	Stored by value	      Stored by reference
Comparison	Compared by value (5 === 5)	Compared by reference ({} !== {})


## What is the difference between == and ===?
1. == (Loose Equality)

    Checks value only (performs type coercion if types differ).

    Converts types automatically before comparison.

    Can lead to unexpected results due to hidden type conversions.

2. === (Strict Equality)

    Checks both value and type (no type coercion).

    Safer and more predictable (recommended in most cases).

## What is NaN in JavaScript?
NaN stands for "Not a Number", but it’s a special value of the number type. It represents an invalid or undefined numerical result.
Key Properties of NaN

    Type: typeof NaN returns "number" (ironically).

    Self-inequality: NaN === NaN → false (only value in JS that’s not equal to itself).

    Global property: NaN is a property of the global object (window.NaN in browsers).

    ```
    0 / 0           // NaN
    Math.sqrt(-1)   // NaN
    "abc" * 5       // NaN (string → number fails)
    parseInt("hello")  // NaN
    Number("xyz")      // NaN
    Infinity - Infinity  // NaN
    ```

## What is undefined vs null?
1. undefined (Default Empty Value)
    Meaning: A variable is declared but not assigned a value.
    Type: typeof undefined → "undefined"
    Common Causes:
        A variable is declared but not initialized.
        javascript
```
let x;
console.log(x); // undefined
```

A function with no return value. javascript
```
function foo() {}
console.log(foo()); // undefined
```

Accessing non-existent object properties.javascript

```
const obj = {};
console.log(obj.name); // undefined
```

2. null (Intentional Absence of Value)
Meaning: Explicitly set to indicate "no value" or "empty."
Type: typeof null → "object" (⚠️ Historical bug in JS!)
Common Uses:
Manually resetting a variable to "empty."
javascript

```
let y = "Hello";
y = null; // Explicitly cleared
```

Indicating no object where one is expected. javascript

        document.getElementById("non-existent-id"); // null

Key Differences
Feature	undefined	null
Default State	Assigned by JS when no value is given	Must be explicitly set
Type	"undefined"	"object" (bug)
Use Case	Missing/unknown value	Intentional empty value
Equality Check	undefined == null → true (loose)	undefined === null → false (strict)
When to Use Which?

✅ Use undefined when:
    A variable or property naturally has no value yet.
    JS automatically assigns it (e.g., uninitialized vars).

✅ Use null when:
    You intentionally want to represent "empty."
    Working with DOM/APIs that return null (e.g., querySelector).


## What is hoisting in JavaScript?
Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution.

Key Rules:
    var Declarations: Hoisted and initialized with undefined.
    let & const Declarations: Hoisted but not initialized (Temporal Dead Zone).
    Function Declarations: Fully hoisted (can be called before declaration).
    Function Expressions: Not hoisted (depends on variable type).

Why Does Hoisting Exist?

    JavaScript’s two-phase execution:
    Compilation Phase: Declarations are hoisted.
    Execution Phase: Assignments and logic run.
    Legacy behavior from early JS design.

Best Practices

✔ Use let/const to avoid unintended undefined values.
✔ Declare variables at the top of their scope.
✔ Prefer function declarations if hoisting is needed.


## What is the difference between let, const, and var?
These keywords are used for variable declaration, but they differ in scoping, hoisting, and mutability.

1. var (Legacy, Avoid in Modern Code)
    Scope: Function-scoped (or global if declared outside a function).
    Hoisting: Hoisted and initialized with undefined.
    Reassignment: Allowed.
    Redeclaration: Allowed (can cause bugs).

    ```
    var x = 10;
    var x = 20; // No error (redeclaration allowed)
    if (true) {
        var x = 30; // Same variable (no block scope)
    }
    console.log(x); // 30 (leaks outside blocks)
    ```

2. let (Modern, Block-Scoped, Mutable)
    Scope: Block-scoped ({}).
    Hoisting: Hoisted but not initialized (Temporal Dead Zone).
    Reassignment: Allowed.
    Redeclaration: Not allowed in the same scope.
    ```
    let y = 10;
    y = 20; // OK (reassignment allowed)
    let y = 30; // ❌ SyntaxError (no redeclaration)
    if (true) {
        let y = 40; // New variable (block-scoped)
    }
    console.log(y); // 20 (outer scope unaffected)
    ```

3. const (Modern, Block-Scoped, Immutable Reference)
    Scope: Block-scoped ({}).
    Hoisting: Hoisted but not initialized (Temporal Dead Zone).
    Reassignment: ❌ Not allowed (for primitives).
    Redeclaration: ❌ Not allowed.
    ```
    const z = 10;
    z = 20; // ❌ TypeError (reassignment prohibited)
    const z = 30; // ❌ SyntaxError (no redeclaration)
    if (true) {
        const z = 40; // New variable (block-scoped)
    }
    console.log(z); // 10 (outer scope unaffected)
    ```

## What is an arrow function? How is it different from a regular function?
An arrow function is a concise syntax for writing functions in JavaScript, introduced in ES6 (ECMAScript 2015). It provides a shorter syntax compared to regular functions and has some key differences in behavior.

Arrow function: Inherits this from the enclosing (parent) scope.
```
const obj = {
  name: "Alice",
  greet: () => {
    console.log(this.name); // `this` refers to the global/window object (not obj)
  }
};
obj.greet(); // Output: undefined (or throws in strict mode)
```
Regular function: Has its own this, determined by how it's called.
```
const obj = {
  name: "Alice",
  greet: function() {
    console.log(this.name); // `this` refers to `obj`
  }
};
obj.greet(); // Output: "Alice"
```

Arrow function: Does not have its own arguments object.
```
const showArgs = () => {
  console.log(arguments); // Error: arguments is not defined
};
showArgs(1, 2, 3);
```
Regular function: Has access to the arguments object.
```
function showArgs() {
  console.log(arguments); // { 0: 1, 1: 2, 2: 3 }
}
showArgs(1, 2, 3);
```

## What is the this keyword in JavaScript?
In JavaScript, the this keyword refers to the context in which a function is executed. Its value depends on how a function is called, not where it is defined. Understanding this is crucial because it behaves differently in different scenarios.
### How this Works in Different Contexts
1. Global Context (Default Binding)
    In the global scope (outside any function), this refers to the global object:
        Browser: window
        Node.js: global
    ```
    console.log(this); // `window` (in browsers)
    ```

2. Function Context (Simple Function Call)
    In a regular function, this refers to the global object (or undefined in strict mode).
    ```
    function showThis() {
        console.log(this); // `window` (or `undefined` in strict mode)
    }
    showThis();
    ```

3. Method Context (Object Method Call)
    When a function is called as a method of an object, this refers to the object itself.
    ```
    const person = {
        name: "Alice",
        greet: function() {
            console.log(this.name); // "Alice" (`this` = `person`)
        }
    };
    person.greet();
    ```

4. Constructor Context (with new)
    When a function is called with the new keyword (as a constructor), this refers to the newly created instance.
    ```
    function Person(name) {
        this.name = name; // `this` = the new object
    }
    const alice = new Person("Alice");
    console.log(alice.name); // "Alice"
    ```

5. Explicit Binding (Using call, apply, bind)
    You can force this to refer to a specific object using:
    call() & apply() (immediate execution)
    bind() (returns a new function with bound this)
    ```
    const user = { name: "Bob" };
    
    function greet() {
        console.log(this.name);
    }

    greet.call(user);    // "Bob" (immediately calls `greet` with `this = user`)
    greet.apply(user);   // "Bob" (same as `call` but takes args as an array)

    const boundGreet = greet.bind(user); // Creates a new function with `this = user`
    boundGreet(); // "Bob"
    ```

6. Arrow Functions (Lexical this)
    Arrow functions do not have their own this. Instead, they inherit this from the surrounding (parent) scope.
    ```
    const person = {
        name: "Alice",
        greet: () => {
            console.log(this.name); // `this` is from outer scope (e.g., `window`)
        }
    };
    person.greet(); // undefined (or global object in non-strict mode)
    ```

## What is an IIFE (Immediately Invoked Function Expression)?
An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. It’s a design pattern used to create a local scope and avoid polluting the global namespace.

```
(function() {
  // Code here runs immediately
})();

// With arrow functions (ES6+)
(() => {
  // Code here runs immediately
})();
```


## What is the difference between function declaration and function expression?
In JavaScript, function declarations and function expressions are two ways to define functions, but they differ in syntax, hoisting behavior and usage. Here’s a breakdown of their key differences:

1. Syntax
Function Declaration
    Defined using the function keyword as a standalone statement.
    Must have a name (cannot be anonymous).

    ```
    function greet() {
        console.log("Hello!");
    }
    ```

Function Expression
    Defined inside an expression (e.g., assigned to a variable).
    Can be named or anonymous.
    ```
    // Anonymous function expression
    const greet = function() {
        console.log("Hello!");
    };

    // Named function expression (useful for debugging)
    const greet = function sayHello() {
        console.log("Hello!");
    };
    ```

2. Hoisting
Function Declaration
    Hoisted to the top of their scope.
    Can be called before the declaration.
    ```
    greet(); // Works (due to hoisting)
    function greet() {
        console.log("Hello!");
    }
    ```

Function Expression
    Not hoisted. Behaves like a variable (e.g., const/let), so it cannot be called before definition.
    ```
    greet(); // Error: greet is not defined (e.g., "Cannot access before initialization")
    const greet = function() {
        console.log("Hello!");
    };
    ```


## What is closure in JavaScript?
In JavaScript, a closure is a function that has access to its own scope, the outer function's variables, and global variables—even after the outer function has finished executing.
When a function is defined inside another function, the inner function retains access to the outer function's variables.

    Even if the outer function completes execution and its scope is gone, the inner function still "remembers" the outer variables.
How Closures Work:

```
function outer() {
  let outerVar = "I'm outside!";

  function inner() {
    console.log(outerVar); // Accesses outerVar from outer function's scope
  }

  return inner;
}

const closureFunc = outer(); // outer() has finished executing...
closureFunc(); // But this still logs: "I'm outside!" (because of closure)
```
### Why Closures Are Useful:
Data Privacy – Encapsulate variables that shouldn't be exposed.
```
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2 (count is private)
```
Currying & Partial Applications – Functions that return functions with preset arguments.
Event Handlers & Callbacks – Maintain state in asynchronous operations.

## What is event bubbling and event capturing?
In JavaScript, event bubbling and event capturing are two phases of event propagation in the DOM (Document Object Model) when an event (like a click) occurs on an element.
1. Event Bubbling (Default)

    The event starts from the target element and bubbles up to the root of the DOM.

    Order: Innermost element → Parent → Grandparent → ... → document

    Example:
    ```
    <div id="grandparent">
        <div id="parent">
            <button id="child">Click me!</button>
        </div>
    </div>

    document.getElementById("grandparent").addEventListener("click", () => {
        console.log("Grandparent clicked");
    });

    document.getElementById("parent").addEventListener("click", () => {
        console.log("Parent clicked");
    });

    document.getElementById("child").addEventListener("click", () => {
        console.log("Child clicked");
    });
    output:
    Child clicked  
    Parent clicked  
    Grandparent clicked  
    ```

2. Event Capturing (Trickling)

    The event starts from the root and trickles down to the target element.

    Order: document → Grandparent → Parent → Innermost element

    Requires setting { capture: true } in addEventListener().

    Example:
    ```
    document.getElementById("grandparent").addEventListener("click", () => {
        console.log("Grandparent captured");
    }, { capture: true });

    document.getElementById("parent").addEventListener("click", () => {
        console.log("Parent captured");
    }, { capture: true });

    document.getElementById("child").addEventListener("click", () => {
        console.log("Child captured");
    }, { capture: true });

    output:
    Grandparent captured  
    Parent captured  
    Child captured  
    ```
Which One is Used by Default?
Bubbling (unless capture: true is set).

When to Use Which?
    Bubbling: Common for event delegation (e.g., handling clicks on dynamically added elements).
    Capturing: Rare, useful when you need to intercept events before they reach children.
    

## What is the difference between call(), apply(), and bind()?
In JavaScript, call(), apply(), and bind() are methods used to control the value of this inside a function and pass arguments. Here’s the key difference:

call()	Calls a function immediately with a given this value and individual arguments.	func.call(thisArg, arg1, arg2, ...)	Takes arguments one by one.

apply()	Calls a function immediately with a given this value and arguments as an array.	func.apply(thisArg, [arg1, arg2])	Takes arguments as an array.

bind()	Returns a new function with a bound this value (does not call immediately).	const newFunc = func.bind(thisArg)	Arguments can be passed later.

1. call() – Invokes Immediately with Individual Arguments

```
function greet(message) {
  console.log(`${message}, ${this.name}!`);
}

const user = { name: "Alice" };

greet.call(user, "Hello"); // Output: "Hello, Alice!"
```

2. apply() – Invokes Immediately with Arguments as an Array
```
function introduce(greeting, punctuation) {
  console.log(`${greeting}, I'm ${this.name}${punctuation}`);
}

const user = { name: "Bob" };

introduce.apply(user, ["Hi", "!"]); // Output: "Hi, I'm Bob!"
```

3. bind() – Creates a New Function with Bound this (Lazy Execution)
```
function logAge() {
  console.log(`${this.name} is ${this.age} years old.`);
}

const person = { name: "Charlie", age: 25 };

const boundFunc = logAge.bind(person); // Returns a new function
boundFunc(); // Output: "Charlie is 25 years old."
```

When to Use Which?

    call() – When you know arguments individually.

    apply() – When arguments are dynamic or in an array.

    bind() – When you need a function reference with a fixed this (e.g., in React event handlers).


## What is the DOM? How do you select elements in JavaScript?
The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a web page as a tree of objects, where each object corresponds to a part of the page's structure (elements, attributes, text, etc.). The DOM allows JavaScript to:
    Access and manipulate the content, structure, and style of a webpage
    Dynamically update the page without reloading
    Respond to user interactions

Selecting Elements in JavaScript

There are several methods to select elements from the DOM:
1. Selecting Single Elements
```
// By ID (returns a single element)
const element = document.getElementById('elementId');

// By CSS selector (returns the first matching element)
const element = document.querySelector('.className');
const element = document.querySelector('div');
const element = document.querySelector('#id');
```
2. Selecting Multiple Elements
```
// By class name (returns HTMLCollection)
const elements = document.getElementsByClassName('className');

// By tag name (returns HTMLCollection)
const elements = document.getElementsByTagName('div');

// By CSS selector (returns NodeList)
const elements = document.querySelectorAll('.className');
const elements = document.querySelectorAll('div, p');
```

3. Specialized Selectors
```
// Select forms by name
const form = document.forms['formName'];

// Select all links
const links = document.links;

// Select all images
const images = document.images;
```

Important Notes
    getElementById is the fastest method for single element selection
    querySelector and querySelectorAll are more versatile as they accept any CSS selector
    HTMLCollections are live collections (update when DOM changes), while NodeLists are generally static (except when using querySelectorAll with certain selectors)
    You can chain selections from already selected elements: parentElement.querySelector('.child')



# Medium Questions (Intermediate Concepts)

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