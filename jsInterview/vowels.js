const vowels = 'aeiou';

function removeVowels(str){
	return str.split('').filter(letter => !vowels.includes(letter)).join('');
}

console.log(removeVowels("The world is the best"));


