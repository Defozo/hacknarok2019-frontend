import emojiArray from '@/modules/emojis'

export default class ProcessingUtils {
  setup(messages) {
    const longWords = {}
    const allWords = {}
    const emojis = {}

    messages.replace(new RegExp('\\n', 'g'), ' ')
      .split(' ')
      .forEach(word => {
        if (emojiArray.includes(word)) {
          this._addOrIncrementArray(emojis, word)
        } else {
          if (word.length > 3) {
            this._addOrIncrementArray(longWords, word)
          }
          this._addOrIncrementArray(allWords, word)
        }
      })

    return { longWords, allWords, emojis }
  }

  getMessagesOfAUser(allMessages, username) {
    return allMessages
      .flatMap(message => message.messages)
      .filter(message => message.sender === username)
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
