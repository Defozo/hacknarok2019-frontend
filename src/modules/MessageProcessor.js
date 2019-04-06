const ProcessingUtils = require('./ProcessingUtils');

module.exports =  class MessageProcessor {
  constructor(messages, username) {
    this.messages = messages
    this.username = username
    this.words = {}
    this.emojis ={}
    this.utils = new ProcessingUtils();
  }

  setup(){
    let messagesOfAUser = this.utils.getMessagesOfAUser(this.messages, "Lalala")
    .map(message => message.content).join(' ');
    const {words, emojis} = this.utils.setup(messagesOfAUser)
    this.words = words
    this.emojis = emojis
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
