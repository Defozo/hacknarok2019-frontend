const _ = require('lodash')
const iconv = require('iconv-lite')

module.exports = class Sanitizer {
  getMessages(input) {
    const fixCharacters = (text) => iconv.decode(iconv.encode(text, 'ISO-8859-1'), 'utf-8')

    const messages = input.messages.map(message => {
      return {
        content: fixCharacters(message.content),
        sender: fixCharacters(message.sender_name),
      }
    })
    const groups = _.groupBy(messages, 'sender')

    const participants = _.keys(groups)

    const messagesOfParticipant1 = groups[participants[0]].map(
        ({content}) => content).join(' ')
    const messagesOfParticipant2 = groups[participants[1]].map(
        ({content}) => content).join(' ')

    return {
      messagesOfParticipant1,
      messagesOfParticipant2
    }
  }
}
