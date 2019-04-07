import Processor from './Processor'

export default class BatchProcessor extends Processor {
  constructor(messages, username) {
    super()

    this.messages = messages
    this.username = username
    this.totalWords = null;
    this.allWords = null;
    this.totalMessages = null;
  }

  setup() {
    const messagesOfAUser = this.utils.getMessagesOfAUser(this.messages, this.username);

    const messageString = messagesOfAUser
      .map(message => message.content)
      .join(' ')

    this.totalWords = messageString.split(' ').length
    this.totalMessages = messagesOfAUser.length
    console.log(this.totalMessages);

    const { longWords, allWords, emojis } = this.utils.setup(messageString)

    this.allWords = allWords
    this.words = longWords
    this.emojis = emojis
  }
}
