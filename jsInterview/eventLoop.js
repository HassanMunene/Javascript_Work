// Callstack. this is the data structure where the functions are push and popped using the Last in first out concept.
// Web APIs. These are browser provide features e.g setTimeout that run in the background.
// callback queue or task queue. This is where callback functions wait so that they can be executed once the callback stack is empty
// Event loop. Keeps checking if the callstack is empty, if so moves the functions on the callback queue to the callstack for them to be executed.
//

console.log("Start here");

setTimeout(() => {
	console.log("setTimeout is here");
}, 0)

console.log("End");

// Even though the timeout is 0 it will still go to the callback queue. and will for its turn until the callstack is empty.
