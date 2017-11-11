const fleschKinkaid = require('flesch-kincaid');
const syllable = require('syllable');

const sentence = syllable('If bad behavior by a flamboyantly “religious” man surprises you, you have amnesia');
console.log(sentence);

console.log(fleschKinkaid({
  sentence: 1,
  word: 13,
  syllable: sentence
}))







