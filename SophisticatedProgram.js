Here's a JavaScript code titled "SophisticatedProgram.js" that implements a complex text analysis tool. Please note that although the code is lengthy, it is still a simplified example to meet the requested criteria.  

```javascript
/*
    SophisticatedProgram.js

    This code implements a complex text analysis tool.
    It takes a text as input and provides various analytical insights.

    DISCLAIMER: This code is a simplified example for demonstration purposes only,
    and may not represent a fully accurate or complete analysis solution.

    Author: Your Name
    Date: September 30, 2021
*/

// Define the TextAnalysis class
class TextAnalysis {
  constructor(text) {
    this.text = text;
    this.wordCount = 0;
    this.sentenceCount = 0;
    this.longestWord = '';
    this.mostFrequentWord = '';
    this.wordFrequencyMap = {};
    this.sentenceList = [];
  }

  analyze() {
    // Tokenize text into words
    const words = this.text.toLowerCase().match(/\b\w+\b/g);

    if (words) {
      this.wordCount = words.length;

      // Analyze word frequency
      this.wordFrequencyMap = this._getWordFrequencyMap(words);
      this.mostFrequentWord = this._getMostFrequentWord(this.wordFrequencyMap);

      // Analyze sentence count and average length
      this.sentenceList = this.text.match(/[^.!?]+[.!?]+/g);
      this.sentenceCount = this.sentenceList ? this.sentenceList.length : 0;
    }

    // Find the longest word
    this.longestWord = this._getLongestWord(words);

    // Print the analysis results
    this._printAnalysis();
  }

  _getWordFrequencyMap(words) {
    const frequencyMap = {};
    words.forEach((word) => {
      frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    });
    return frequencyMap;
  }

  _getMostFrequentWord(frequencyMap) {
    let maxFrequency = 0;
    let mostFrequentWord = '';
    Object.entries(frequencyMap).forEach(([word, frequency]) => {
      if (frequency > maxFrequency) {
        mostFrequentWord = word;
        maxFrequency = frequency;
      }
    });
    return mostFrequentWord;
  }

  _getLongestWord(words) {
    let longestWord = '';
    words.forEach((word) => {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    });
    return longestWord;
  }

  _printAnalysis() {
    console.log('Text Analysis Results:');
    console.log('----------------------');
    console.log(`Word Count: ${this.wordCount}`);
    console.log(`Sentence Count: ${this.sentenceCount}`);
    console.log(`Longest Word: ${this.longestWord}`);
    console.log(`Most Frequent Word: ${this.mostFrequentWord}`);
    console.log('Word Frequency:');
    Object.entries(this.wordFrequencyMap).forEach(([word, count]) => {
      console.log(`${word}: ${count}`);
    });
    console.log('----------------------');
  }
}

// Example usage
const text = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Sed et urna vitae diam congue commodo a id lorem.
  Mauris consectetur odio vel mauris congue, nec venenatis mauris pretium.
  Nullam sed metus sodales, porttitor mauris at, elementum leo.
  Sed nec elit sit amet nisl finibus accumsan. Nulla facilisi.
  Curabitur a elit sit amet tellus accumsan euismod a et erat.
`;

const analysis = new TextAnalysis(text);
analysis.analyze();
```

This code demonstrates a simplified text analysis tool that counts words, sentences, finds the longest word, identifies the most frequent word, and generates a word frequency map. The analysis results are printed to the console. Keep in mind that this is just a simplified example and a real-world solution would require more extensive analysis techniques.