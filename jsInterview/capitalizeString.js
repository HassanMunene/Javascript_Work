function capitalizeString(str) {
    //fist convert the string to an array
    const arr = str.split('');

    //loop through the array to convert some letters to uppercase
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i - 1] === " ") {
            arr[i] = arr[i].toUpperCase();
        }
    }
    return arr.join('');
}

console.log(capitalizeString("hello world"));