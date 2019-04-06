const ProcessingUtils = require('./ProcessingUtils');

module.exports = class Processor {
  constructor(){
    this.words = {};
    this.emojis = {};
    this.utils = new ProcessingUtils();
  }

  setup(input){
    const {words, emojis} = this.utils.setup(input);
    this.words = words;
    this.emojis = emojis;
  }

  findWordCount(word) {
    return this.words[word];
  }

  countWords() {
    return {
      wordArray: this.utils.sortObject(this.words),
      emojiArray: this.utils.sortObject(this.emojis)
    }
  }

}
