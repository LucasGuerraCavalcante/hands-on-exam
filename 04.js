// 4. Write a program to check if a string is palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam, nurses run.(1 point)

const checkPalindrom = (word) => {
  for (i = 0; i < word.length; i++) {
		if (word[i] != word[word.length - (i + 1)]) {
			return false;
		}
	}

	return true;
}

// deve dar falso
console.log(checkPalindrom('run'))
console.log(checkPalindrom('nurses'))
console.log(checkPalindrom('lucas'))

// deve dar true
console.log(checkPalindrom('madam'))
console.log(checkPalindrom('arara'))
console.log(checkPalindrom('ovo'))
console.log(checkPalindrom('osso'))
console.log(checkPalindrom('reler'))
console.log(checkPalindrom('anilina'))
