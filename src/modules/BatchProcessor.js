import Processor from './Processor'

export default class BatchProcessor extends Processor {
  constructor(messages, username) {
    super()

    this.messages = messages
    this.username = username
  }

  setup() {
    const messagesOfAUser = this.utils.getMessagesOfAUser(this.messages, this.username)
      .map(message => message.content)
      .join(' ')

    const { words, emojis } = this.utils.setup(messagesOfAUser)

    this.words = words
    this.emojis = emojis
  }
}
