# Medium Questions (Intermediate Concepts)

# What is the event loop in JavaScript?
The event loop is JavaScript's mechanism for handling asynchronous operations while maintaining its single-threaded nature. It's what allows JavaScript to perform non-blocking I/O operations despite being single-threaded.
Key Components
    Call Stack: Tracks the currently executing functions (LIFO structure)
    Web APIs: Browser-provided features (setTimeout, DOM events, AJAX calls)
    Callback Queue (Task Queue): Holds callbacks waiting to be executed
    Microtask Queue: Higher priority queue for promises and mutation observers
    Event Loop: Continuously checks if the call stack is empty and moves tasks from queues to the stack

How It Works
Synchronous code executes immediately and goes on the call stack.
Asynchronous operations (like setTimeout or fetch) are handed off to Web APIs.
When Web APIs complete, their callbacks go to either:
    The Callback Queue (for macrotasks like setTimeout)
    The Microtask Queue (for promises and mutation observers)
    The event loop prioritizes:
        First, it executes all microtasks until the microtask queue is empty
        Then it executes one macrotask from the callback queue
        Then repeats the process

Example with setTimeout and Promises:
```
console.log('Start');

setTimeout(() => console.log('Timeout'), 0);

Promise.resolve().then(() => console.log('Promise'));

console.log('End');
Start
End
Promise
Timeout
```

## What are promises in JavaScript? How do they work?
A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a cleaner alternative to callback-based asynchronous code, helping to avoid "callback hell."
Promise States
A promise can be in one of three states:
    Pending: Initial state, neither fulfilled nor rejected
    Fulfilled: The operation completed successfully
    Rejected: The operation failed

Creating a Promise:
```
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation here
  if (/* success */) {
    resolve(value); // Fulfill the promise
  } else {
    reject(error); // Reject the promise
  }
});
```
Using Promises
Basic Usage with .then() and .catch()
```
myPromise
  .then(value => {
    // Handle successful fulfillment
    console.log(value);
  })
  .catch(error => {
    // Handle rejection
    console.error(error);
  });
```

How Promises Work Under the Hood
When created, a promise is in the pending state
The executor function runs immediately
If the async operation succeeds, resolve() is called, transitioning to fulfilled
If it fails, reject() is called, transitioning to rejected
Callbacks registered with .then() or .catch() are placed in the microtask queue
These callbacks execute when the call stack is empty (higher priority than regular tasks)

## What is async/await? How is it different from promises?
Async/await is syntactic sugar built on top of promises that makes asynchronous code look and behave more like synchronous code. It consists of two keywords:
    async: Declares a function as asynchronous (always returns a promise)
    await: Pauses execution until a promise settles (inside async functions only)

Basic Syntax:
```
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
```

## What is the difference between setTimeout() and setInterval()?
1. setTimeout()
What it does: Executes a function once after a specified delay (in milliseconds).
```
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
```

2. setInterval()
What it does: Executes a function repeatedly at fixed intervals (in milliseconds).
```
setInterval(() => {
  console.log("Hello every 2 seconds");
}, 2000);
```

## What is the difference between localStorage, sessionStorage, and cookies?

1. localStorage

What it is: A key–value storage available in the browser.

Persistence: Data persists even after the browser is closed and reopened.

Storage size: ~5–10 MB (depends on browser).

Access: Only accessible on the client side (JavaScript).

Expiration: Never expires automatically (unless cleared manually or by code).

Example:
```
localStorage.setItem("username", "Hassan");
console.log(localStorage.getItem("username")); // "Hassan"

```

2. sessionStorage

What it is: Similar to localStorage, but tied to a single browser tab/session.

Persistence: Data is cleared once the tab is closed (doesn’t survive page reload though).

Storage size: ~5 MB.

Access: Only accessible on the client side (JavaScript).

Expiration: Ends when the tab or browser is closed.

Example:
```
sessionStorage.setItem("theme", "dark");
console.log(sessionStorage.getItem("theme")); // "dark"
```

3. Cookies

What it is: Small pieces of data stored in the browser and sent to the server with every HTTP request.

Persistence: Can be set to expire at a specific time/date, or be session-based.

Storage size: ~4 KB max.

Access:

Client-side: via document.cookie (but less convenient than localStorage).

Server-side: automatically included in HTTP requests, used for authentication/tracking.

Expiration: Configurable (session or persistent).

Example:
```
document.cookie = "token=abc123; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
```

## What is CORS? How do you handle it?
CORS stands for Cross-Origin Resource Sharing.

By default, browsers enforce a security policy called the Same-Origin Policy (SOP).

This means a web page can only make requests to the same domain (origin) it was loaded from.

Origin = protocol + domain + port
Example:

https://example.com:443 and https://example.com:8080 are different origins because of the port.

https://example.com and http://example.com are different origins because of the protocol.

CORS is a mechanism that allows a server to tell the browser:
“Hey, it’s okay for requests from https://myfrontend.com to access my resources.”

Why is CORS needed?

Imagine:

You have a frontend running at http://localhost:3000

Your API is running at http://localhost:5000
When your frontend tries to fetch data from the API, the browser will block it unless the API explicitly allows it via CORS headers.

How does CORS work?

When making a cross-origin request, the browser may send a preflight request (an OPTIONS request) to the server to check if it’s allowed.
The server responds with headers like:

```
Access-Control-Allow-Origin: https://myfrontend.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
```
If the response allows it, the browser proceeds with the actual request. Otherwise, it blocks it.

How to handle CORS
1. On the server (most common and correct way)

Configure your backend to send the proper headers.

Node.js/Express Example:
```
import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ 
  origin: "http://localhost:3000", // allow only this origin
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true // allow cookies/auth headers
}));

app.listen(5000, () => console.log("Server running"));
```
2. On the frontend

You can’t really “solve” CORS from the frontend (it’s a browser security feature), but you can:

Use a proxy (e.g., in React/Vite you can proxy API calls through the dev server).

Example in vite.config.js:
```
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:5000"
    }
  }
});
```

## What is a higher-order function?
A higher-order function is a function that does at least one of the following:
Takes another function as an argument (callback).
Returns a function as its result.
In short → functions that work with other functions.

3. Built-in JavaScript HOFs

You already use them every day:

map()

filter()

reduce()

forEach()

Example:
```
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

## What is currying in JavaScript?

    What is memoization? How would you implement it?

    What is the difference between shallow copy and deep copy?

    How does prototypal inheritance work in JavaScript?

## What are generators in JavaScript?
Generators are one of the most powerful yet often underutilized features in JavaScript. Introduced in ECMAScript 2015 (ES6), generators allow you to write functions that can exit and later re-enter, maintaining their context (variable bindings) between re-entries. In this comprehensive guide, we’ll explore what generators are, how they work, and how you can leverage them in your JavaScript and TypeScript projects.


## What is the difference between Object.freeze() and Object.seal()?
In js , Object.seal() and Object.freeze() are methods used to control the mutability of objects. While they both restrict modifications to an object, they have some key differences. Let's explore each method in detail, along with their respective examples:

Object.seal():
Object.seal() is a method that seals an object, preventing the addition or deletion of properties, while allowing the modification of existing properties.
Sealed objects are still mutable, meaning you can change the values of the existing properties.
However, you cannot add new properties or remove existing ones.
The Object.isSealed() method can be used to check if an object is sealed.
const person = { name: "John", age: 30 };

Object.seal(person);

person.age = 31; // Modifying an existing property is allowed
console.log(person); // Output: { name: "John", age: 31 }

person.city = "New York"; // Adding new properties is not allowed
console.log(person); // Output: { name: "John", age: 31 }

delete person.name; // Removing existing properties is not allowed
console.log(person); // Output: { name: "John", age: 31 }

console.log(Object.isSealed(person)); // Output: true
2. Object.freeze():

Object.freeze() is a method that freezes an object, making it completely immutable.
Frozen objects are read-only, and no modifications, additions, or deletions of properties are allowed.
The Object.isFrozen() method can be used to check if an object is frozen.
const person = { name: "John", age: 30 };

Object.freeze(person);

person.age = 31; // Modifying properties is not allowed
console.log(person); // Output: { name: "John", age: 30 }

person.city = "New York"; // Adding new properties is not allowed
console.log(person); // Output: { name: "John", age: 30 }

delete person.name; // Removing properties is not allowed
console.log(person); // Output: { name: "John", age: 30 }

console.log(Object.isFrozen(person)); // Output: true
Key differences:

Object.seal() allows modification of existing properties, but does not permit addition or deletion of properties. Object.freeze(), on the other hand, prevents any modifications, additions, or deletions to properties.
Object.seal() creates a “sealed” object, while Object.freeze() creates a “frozen” object.
Sealed objects are still mutable, whereas frozen objects are completely immutable.
Both methods return the modified object itself.
Object.seal() allows checking if an object is sealed using Object.isSealed(), and Object.freeze() allows checking if an object is frozen using Object.isFrozen().
Conclusion : Object.seal() and Object.freeze() are methods in JavaScript that provide different levels of object immutability and control over object modifications.

Object.seal() allows the modification of existing properties while preventing the addition or deletion of properties. Sealed objects are still mutable, and the Object.isSealed() method can be used to check if an object is sealed.
Object.freeze() creates completely immutable objects where no modifications, additions, or deletions of properties are allowed. Frozen objects are read-only, and the Object.isFrozen() method can be used to check if an object is frozen.
the choice between Object.seal() and Object.freeze() depends on the desired level of immutability and control required for the object. If you want to allow modification of existing properties but prevent structural changes, Object.seal() is suitable. If you need to create fully immutable objects, ensuring that no modifications are possible, Object.freeze() is the appropriate choice.

## What is the Temporal Dead Zone (TDZ) in JavaScript?
The Temporal Dead Zone (TDZ) refers to the period during which a variable is declared but cannot be accessed. This occurs from the start of the block scope until the variable is initialized. Attempting to access the variable in this “zone” results in a ReferenceError.

Key Characteristics of the TDZ:
Variables declared with let or const are hoisted but left uninitialized.
Accessing these variables before initialization triggers a runtime error.
The TDZ exists to prevent potential bugs caused by premature access.

## How does JSON.stringify() work? What are its limitations?
Cloning the objects often becomes a problem for JS programmers. Surprisingly, the second most popular answer to the question `What is the most efficient way to deep clone an object in JavaScript?` is… to JSON.parse(JSON.stringify()) it!

By the way, I found such a ‘deep cloning’ in my own old code!

Why it can cause problems?
You can lose your data
The JSON.stringify() just converts a JavaScript value to a JSON string. It`s ok to use it with some primitives like Numbers, Strings or Booleans.

JSON.parse(JSON.stringify({ a: 1, b: "Hello, world", c: true})) // it`s OK
But sometimes, JSON.stringify() is a little bit… unpredictable. For instance, something like this seems to be weird:

JSON.stringify({ key: undefined }); // converted to "{}"
JSON.stringify({ key: Symbol() }); // "{}" again
JSON.stringify({ key: function(){} }); // "{}" as well
As you can see, you can just lose data of unsupported types when copying your object in such a way. Moreover, JavaScript won`t even warn you about that, because calling JSON.stringify() with such data types does not throw any error.

By the way, as for me, one of the biggest problems of cloning with JSON.stringify() is that methods are not supported by it

Sometimes, JSON.stringify() pretends to be smart and converts some unsupported data types to supported ones. So, in cases like these, everything will be converted to {"key": null}:

JSON.stringify({ key: Nan }); // {"key": null}
JSON.stringify({ key: Infinity }); // {"key": null}
Finally, there is a problem with the Date(). Dates will be parsed as Strings, not as Dates. So, if you store the `Date` in your object and clone using JSON, you will lose them, too.

Get Petro Zubar’s stories in your inbox
Join Medium for free to get updates from this writer.

Enter your email
Subscribe
It is not so quick and efficient

Press enter or click to view image in full size

Looking at some benchmarks, (like this one, or this one) we can see, that cloning with JSON.parse(JSON.stringify()) can be really slow, especially on large objects. I also suggest you read this story about just one line (!!!) of JS code that made a site 10 times slower:

This one line of Javascript made FT.com 10 times slower
A journey into a performance degradation…
medium.com

(sorry for the spoiler, but that string was JSON.parse(JSON.stringify()) )

But wait, how to clone the things without “JSONing” them?
OK, now we see, that cloning by converting and parsing JSON may cause huge problems and become antipattern. Since then, there are better approaches:

(the easiest one) Use jQuery or Lodash implementations of deep cloning
(2023 update) Use the `structuredClone()` method! It is supported by modern browsers.
(more interesting) Write your own deep cloning function using recursion (or just google to find some implementations).
So, every time you need to clone an object, remember, that JSON.parse(JSON.stringify()) may cause problems and you’d better avoid using it.
