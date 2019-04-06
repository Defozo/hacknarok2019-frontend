import emojiArray from '@/modules/emojis'
import Sanitizer from '@/modules/Sanitizer'

export default class ProcessingUtils {
  setup(input) {
    const sanitizer = new Sanitizer()
    const messages = sanitizer.prepareMessages(input)

    const words = {}
    const emojis = {}

    messages.replace(new RegExp('\\n', 'g'), ' ')
      .split(' ')
      .forEach(word => {
        if (emojiArray.includes(word)) {
          this._addOrIncrementArray(emojis, word)
        } else if (word.length > 3) {
          this._addOrIncrementArray(words, word)
        }
      })

    return { words, emojis }
  }

  getMessagesOfAUser(allMessages, username) {
    const sanitizer = new Sanitizer()

    const messages = allMessages
      .flatMap(message => message.messages)
      .filter(message => message.sender_name === username)
      .map(message => ({
        content: sanitizer.fixCharacters(message.content),
        sender: sanitizer.fixCharacters(message.sender_name),
      }))

    return messages
  }

  sortObject(obj) {
    const arr = []

    for (const prop in obj) {
      if (prop in obj) {
        arr.push({
          'key': prop,
          'value': obj[prop],
        })
      }
    }

    arr.sort((a, b) => b.value - a.value)

    return arr
  }

  _addOrIncrementArray(array, word) {
    if (array[word] === undefined) {
      array[word] = 1
    } else {
      array[word] += 1
    }
  }
}
