function zigzag(str, numRows) {
	// create an array of empty string for each row.
	const arr = new Array(numRows).fill('');
	console.log(arr);
	// initialize currentRow to be 0
	let currentRow = 0;
	// initialize the direction we will follow 
	let goingDown = false;

	for(let char of str){
		arr[currentRow] += char;
		if (currentRow === 0){
			goingDown = true;
		} else if (currentRow === numRows - 1){
			goingDown = false
		}
		if (goingDown === true) {
			currentRow += 1;
		} else {
			currentRow -= 1;
		}
	}
	console.log(arr);
}

zigzag("JPMORGANISHIRING", 3);
