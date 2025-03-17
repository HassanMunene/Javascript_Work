function checkPalindrome(str) {
	// calculate the length of the string
	const len = str.length;

	//iterate through the first half of the string
	for (let i = 0; i < len / 2; i++) {
		if (str[i] !== str[len -1 - i]) {
			return 'it is not a palindrome';
		}
	}
	return 'it is a palindrome';
}

const value = checkPalindrome("hassan");
console.log(value);


