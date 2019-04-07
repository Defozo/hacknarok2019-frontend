import Processor from './Processor'

export default class BatchProcessor extends Processor {
  constructor(messages, username) {
    super()

    this.messages = messages
    this.username = username
    this.totalWords = null;
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

    const { words, emojis } = this.utils.setup(messageString)

    this.words = words
    this.emojis = emojis
  }
}
