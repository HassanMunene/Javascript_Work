function reverseString (str) {
    // fisrt convert the string to an array.
    const strArray = str.split('');
    const newArray = [];
    const length = strArray.length;
    for (let i = 0; i < length; i++) {
        const char = strArray.pop();
        console.log("string array length", strArray.length);
        newArray.push(char);
    }
    console.log("new array", newArray);
    const str2 = newArray.join('');
    return str2;
}

const answer = reverseString("Apple");
console.log(answer);