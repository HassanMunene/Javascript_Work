// nested function example

// outer function
function greet(name) {

    // inner function
    function displayName() {
        console.log('Hi' + ' ' + name);
    }

    // calling inner function
    return displayName;
}

// calling outer function
const g1 = greet('Hassan');
console.log(g1);
g1();
