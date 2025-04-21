console.log(myVar);

var myVar = 10;

// the results here will be undefined because of hoisting the declaration is moved to the top of the scope.
// and as we know only declaration results to undefined.


message = "Hello Hassan";
console.log(message);

var message;

// The second log will output `Hello Hassan` this is because once because of hoisting the declarations are moved to the top
// of the scope but in this case the next immeadiate line is initializing the variable and therefore when we log we will have a variable that has a string.

