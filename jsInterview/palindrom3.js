//check if a string is a palindrom basically it is a palindrom
// if we reverse the string and still is equal it its previous unreversed version

function checkPalindrom (str) {
    const firstArray = str.split('');
    const length =firstArray.length;
    const secondArray = [];

    for (let i = length - 1; i >= 0; i--) {
        const temp = firstArray[i];
        secondArray.push(temp);
    }

    const firstStr = firstArray.join('');
    const secondStr = secondArray.join('');

    if (firstStr.toLowerCase() !== secondStr.toLowerCase()) {
        return false;
    }
    return true;
}

console.log(checkPalindrom("Hello"));