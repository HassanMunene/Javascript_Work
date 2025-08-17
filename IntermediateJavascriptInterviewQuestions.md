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