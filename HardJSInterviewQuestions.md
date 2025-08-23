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
