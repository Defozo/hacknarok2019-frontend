const emojiArray = require('./emojis')
const Sanitizer = require('./Sanitizer');
const _ = require('lodash')

module.exports = class ProcessingUtils {

  setup(input) {
  const sanitizer = new Sanitizer();
  const messages = sanitizer.prepareMessages(input);

    let words = {};
    let emojis = {};
    messages.replace(new RegExp('\\n', 'g'), ' ').split(
        ' ').forEach(
        word => {
          if (emojiArray.includes(word)) {
            this._addOrIncrementArray(emojis, word)
          } else {
            if (word.length > 3) {
              this._addOrIncrementArray(words, word);
            }
          }
        });
    return {words, emojis};
  }

  getMessagesOfAUser(allMessages, username){
    const sanitizer = new Sanitizer();
    const messages = allMessages
    .flatMap(message => message.messages)
    .filter(message => message.sender_name === username)
    .map(message => {
      return {
        content: sanitizer.fixCharacters(message.content),
        sender: sanitizer.fixCharacters(message.sender_name),
      }
    });
    return messages;
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

  _addOrIncrementArray(array, word) {
    if (array[word] === undefined) {
      array[word] = 1;
    } else {
      let el = array[word];
      array[word] = el + 1;
    }
  }
}
