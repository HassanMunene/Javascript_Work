//promises .then .catch callbacks goes to the microtask queue and not the regular callback queue.
// Microtask queues run before the callbacks in the callback queues they have a higher priority.
// if a functions return a promise by default then we have to use the .then().catch() chain.
// fetch("https://api.com").then((response) => {
// 	return response.json() // this also returns a promise
// }).then((data) => {
// 	console.log(data):
// }).catch((error) => {
// 	console.log(error);
// })

const promise = new Promise((resolve, reject) => {
	const success = true;

	if (success === true){
		resolve("it worked!");
	} else {
		reject("Nothing seems to work mate!");
	}
});

promise.then((result) => {
	console.log(result);
}).catch((error) => {
	console.log(error);
})
