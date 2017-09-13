let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end?';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');
//console.log(storyWords);

console.log(`${storyWords.length} words in the Story.`)

// remove  dots and commas
console.log(storyWords);

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Unnecessary Words Checker
// const findUnnecessaryWords = (word) => {
//  if (unnecessaryWords.indexOf(word) > -1)
//    return false;
//  else
//    return true;
// };

// Creating new array with out Unnecessary Words
// let betterWords = storyWords.filter(function(word){
//  return findUnnecessaryWords(word);
// });

// Using Filter and this.
// let betterWords = storyWords.filter(function(word){
//  return this.indexOf(word)<0;
//},unnecessaryWords);

// Using Includes

let betterWords = storyWords.filter(function(word){
  return !unnecessaryWords.includes(word)
});
console.log(betterWords.join(' '));

// Counting overused words
let overusedWordsCount = 0;
storyWords.forEach(word => {
  if (overusedWords.includes(word)) {
  		overusedWordsCount++
    };
});
console.log(`\nYou have ${overusedWordsCount} Overused Words`);

// Counting number of sentences
let numberSentences = 0;
const endOfSentences = ['.', '!', '?'];
storyWords.forEach(word => {
  if (endOfSentences.includes(word.slice(-1)[0])) {
  		numberSentences++
    };
});
console.log(`\nYou have ${numberSentences} sentences`);

//  Searching for the most frequest word
let uniqueWords = [];
let wordStats = [[],[]];
let word = 'word';
const uselessSymbols = ['.', '!', '?', '"', '-', ','];
for (wordNumber in storyWords) {
  word = storyWords[wordNumber].toLowerCase();
  // clearing word from symbols
  if (uselessSymbols.includes(word.slice(-1)[0])) {
  		word = word.slice(0, -1);
    };
  if (uselessSymbols.includes(word[0])) {
  		word = word.slice(1, word.length);
    };

  // creatig array of unique words
  if (!uniqueWords.includes(word)){
    uniqueWords.push(word);
  };
};

// console.log(uniqueWords.join(' '));

// Looking for the  most frequent word
function countInArray(array, what) {
    return array.filter(item => item == what).length;
};

// Generating Stats for each unique word
for (wordNumber in uniqueWords) {
  wordStats.sort();
  wordStats[1].push(uniqueWords[wordNumber]);
  wordStats[0].push(countInArray(storyWords, uniqueWords[wordNumber]));
//  console.log(`${wordStats[0][wordNumber]} - ${wordStats[1][wordNumber]}`);
};

// Sorting array of words
newArray = wordStats.sort(function(a,b) {
        return a[0]-b[0]
    });

// Priting sorted array
for (wordNumber in uniqueWords) {
  console.log(`${newArray[0][wordNumber]} - ${newArray[1][wordNumber]}`);
};
