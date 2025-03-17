function reverseInt(num) {
	//convert the integer to a string first
	let str = num.toString();
	let reversedStr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reversedStr += str[i];
	}
	console.log("reversed string", reversedStr);
	//convert the reversed string to an integer
	let reversedInt = parseInt(reversedStr);
	console.log("reversed int", reversedInt);
	// then make sure if it was a negative number it remains negative
	let answer = reversedInt * Math.sign(num);
	return answer;
}

const rev = reverseInt(-15);
console.log("the answer is", rev);
