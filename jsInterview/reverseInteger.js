const num = -12345;

function reverseInt (int) {
    //convert int to string
    const numStr = num.toString();
    //convert the string to an array
    const arr = numStr.split('');
    // declare an empty reverse array
    const reverseArr = [];
    const length = arr.length;

    //loop through array
    for (let i = 0; i < length; i++) {
        const temp = arr.pop();
        reverseArr.push(temp);
    }
    console.log(reverseArr);
    //the turn arr back to string
    const str2 = reverseArr.join('');
    //then turn string back to num
    return parseInt(str2) * Math.sign(num);
}

const ans = reverseInt(num);

console.log("answer ", ans);
console.log("type of ans", typeof(ans));