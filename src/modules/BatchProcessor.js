import Processor from './Processor'

export default class MessageProcessor extends Processor {
  constructor(messages, username) {
    super()

    this.messages = messages
    this.username = username
  }

  setup() {
    let messagesOfAUser = this.utils.getMessagesOfAUser(this.messages, 'Lalala')
      .map(message => message.content)
      .join(' ')

    const { words, emojis } = this.utils.setup(messagesOfAUser)

    this.words = words
    this.emojis = emojis
  }
}
