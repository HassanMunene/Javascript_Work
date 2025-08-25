# Hard Questions (Advanced Topics)

## Explain how JavaScript’s garbage collection works.
Garbage collection in JavaScript simplifies memory management by automatically removing unused objects, preventing memory leaks, and optimizing performance. This reduces development complexity, allowing developers to focus on functionality rather than manual memory handling

## What is the difference between macro tasks and micro tasks in the event loop?
Micro tasks are smaller tasks that should be executed immediately after the currently executing script/before the event loop continues. They have a higher priority than macro tasks. After a macro task finishes, the event loop will empty the entire micro task queue (processing all micro tasks in it) before moving on to the next macro task or rendering.

Common Sources of Micro Tasks:

    Promise callbacks (.then(), .catch(), .finally())

    async/await (the code after an await is effectively a micro task)

    queueMicrotask() API

    MutationObserver (browser API for observing DOM changes)

Macro tasks represent discrete, standalone units of work. The event loop picks one macro task from the macro task queue, executes it completely, then moves on to check the micro task queue before grabbing the next macro task.

Common Sources of Macro Tasks:

    setTimeout()

    setInterval()

    setImmediate() (Node.js)

    I/O operations (e.g., reading files, network requests)

    UI rendering (browsers often do this after each macro task)

    User interaction events (click, scroll, keypress)


## How would you implement a debounce or throttle function?

##  Explain how WeakMap and WeakSet work. How are they different from Map and Set?
In JavaScript, there are two types of references strong and weak. The WeakSet and WeakMap are called weak references. Since these are weak references they do not prevent garbage collection if they are the only reference to the object in the memory. These objects are rarely used but are useful when we want memory usage to be automatically managed.

## What is the difference between Proxy and Reflect in JavaScript?

## How does JavaScript handle memory leaks? How would you debug them?
JavaScript is a garbage-collected language. This means developers don't manually allocate and free memory. Instead, the JavaScript engine (like V8 in Chrome and Node.js) automatically manages memory through a process called Garbage Collection (GC).

The core concept most modern garbage collectors use is reachability.

    The "Root": There is a base set of inherently reachable values that are guaranteed to be in memory. For example:

        The currently executing function, its local variables, and parameters.

        Other functions and variables in the current call stack.

        Global variables (window in browsers, global in Node.js).

    Reachability: Any value that is accessible or referable from the root (via a reference or a chain of references) is considered "reachable". This is the stuff that must be kept in memory.

    Garbage Collection: The engine runs a garbage collector in the background. It periodically scans memory, finds all objects that are not reachable from the root, and deletes them, freeing up that memory.

A memory leak, therefore, occurs when an object that is no longer needed is still unexpectedly "reachable" from the root. The garbage collector sees it as "still in use" and never releases it. Over time, these leaked objects accumulate, increasing memory usage and potentially slowing down or crashing the application.

## Explain how Symbol works in JavaScript.
The Symbol is a fundamental primitive data type introduced in ECMAScript 2015 (ES6) that serves a unique purpose: creating completely unique identifiers.
The Core Concept: Uniqueness

The most important thing to understand about Symbol is that every symbol value returned from Symbol() is unique.
javascript

const symbol1 = Symbol();
const symbol2 = Symbol();

console.log(symbol1 === symbol2); // false

Even if you create a million symbols with the same description, no two are equal. This uniqueness is their primary superpower.

## How would you implement a custom Promise from scratch?

## What are Web Workers? How do they work?

## How does JavaScript’s module system work (ES6 modules vs CommonJS)?

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
