function checkIfPalindrom (str){
	// first convert the string to array
	const strArray = str.split('');

	// the iterate through array as far as we not past middel
	for (let i = 0; i < strArray.length / 2; i++){
		if (strArray[i] !== strArray[strArray.length -(1 + i)]) {
			return false
		}
	}
	return true;
}

console.log(checkIfPalindrom("dad"));
