const emojiArray = require('./emojis');

export default class Processor {
  constructor(){
    this.words = {};
    this.emojis = {};
  }

  sortObject(obj) {
    let arr = [];
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        arr.push({
          'key': prop,
          'value': obj[prop]
        });
      }
    }
    arr.sort((a, b) => {
      return b.value - a.value;
    });
    return arr;
  }

  addOrIncrementArray(array, word) {
    if (array[word] === undefined) {
      array[word] = 1;
    } else {
      let el = array[word];
      array[word] = el + 1;
    }
  }

  setup(expressions){
    let words = {};
    let emojis = {};
    expressions.replace(new RegExp('\\n', 'g'), ' ').split(' ').forEach(
        word => {
          if (emojiArray.includes(word)) {
            this.addOrIncrementArray(emojis, word)
          } else {
            if (word.length > 3) {
              this.addOrIncrementArray(words, word);
            }
          }
        });
    this.words = words;
    this.emojis = emojis;
  }

  findWordCount(word) {
    return this.words[word];
  }

  countWords() {
    return {
      wordArray: this.sortObject(this.words),
      emojiArray: this.sortObject(this.emojis)
    }
  }
}
