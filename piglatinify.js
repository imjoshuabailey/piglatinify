
function piglatin(english) {
	const vowels = ["a", "e", "i", "o", "u"];

	var words = english.split(" ");
	console.log(words);
	var changedWords = [];

	var result = words.map(function(word) {
		for (a = 0; a < word.length; a++) {
			// console.log("index:", a);
			for (b = 0; b < vowels.length; b++) {
				if(word[a] == vowels[b]) {
					var vowel = word.slice(a);
					var cons = word.slice(0, a);
					return changedWords.push(vowel + "-" + cons + "ay");
				}
			}
		}
	});
	console.log(changedWords);
}


piglatin("change these words!")
