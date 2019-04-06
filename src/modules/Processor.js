import ProcessingUtils from './ProcessingUtils'
import emojiArray from './emojis'

export default class Processor {
  constructor() {
    this.words = {}
    this.emojis = {}
    this.utils = new ProcessingUtils()
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
    arr.sort((a, b) => {
      return b.value - a.value
    })
    return arr
  }

  addOrIncrementArray(array, word) {
    if (array[word] === undefined) {
      array[word] = 1
    } else {
      const el = array[word]
      array[word] = el + 1
    }
  }

  setup(expressions) {
    const words = {}
    const emojis = {}
    expressions.replace(new RegExp('\\n', 'g'), ' ').split(' ').forEach(word => {
      if (emojiArray.includes(word)) {
        this.addOrIncrementArray(emojis, word)
      } else if (word.length > 3) {
        this.addOrIncrementArray(words, word)
      }
    })
    this.words = words
    this.emojis = emojis
  }

  findWordCount(word) {
    return this.words[word]
  }

  countWords() {
    return {
      wordArray: this.sortObject(this.words),
      emojiArray: this.sortObject(this.emojis),
    }
  }
}
