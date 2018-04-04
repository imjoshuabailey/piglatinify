
// function takes in a sentence and returns the sentence in pig latin
function piglatin(english) {
	const results = english.split(" ").map(function(word) { // map over the words
		return pigifyWord(word)
	});

	return results.join(" ");
}

function pigifyWord(word) {
	const vowels = ["a", "e", "i", "o", "u"];

	for (a = 0; a < word.length; a++) {
		if(word[a] == "q") {
			 vowels.pop();
		 }
		for (b = 0; b < vowels.length; b++) {
			if(word[0] == vowels[b]){
				return word + "-way"
			} else if(word[a] == vowels[b]) {
				var vowel = word.slice(a);
				var cons = word.slice(0, a);
				var word = vowel + "-" + cons + "ay"

				return movePunctuationToEnd(word);
			}

		}
	}
}

function movePunctuationToEnd(word) {
	const punctuation = [".", "!", "?"]

	var toEnd = [];

	for (var i = 0; i < punctuation.length; i++) {

		for (var index = word.indexOf(punctuation[i]); index > -1; index = word.indexOf(punctuation[i])) {
			toEnd.push(word[index])

			word = word.slice(0, index) + word.slice(index + 1)
		}
	}

	return word + toEnd.join('')
}





console.log(piglatin("The quick brown. fox jumped over the lazy dog!"));
