# Piglatinify
A simple function that takes a string of words and returns them in pig latin.

## Rules
- [x] `split` string by whitespace into an array of strings
- [x] `for loop` through the array
- [x] `.map` through each string
- [ ] ignoring all non-letter characters
- [ ] `if` selected string starts with a vowel add "way" to the end
- [ ] `if` the selected string starts with consonants, `slice` all consonants before the first vowel (`if` consonants includes "qu" "u" is a consonant,) and `push` them onto the end of the selected string, add "ay" to the end of string
- [ ] `join` all strings back into one long string
