const iconv = require('iconv-lite')

module.exports = class Sanitizer {
  fixCharacters(text) {
    return iconv.decode(iconv.encode(text, 'ISO-8859-1'), 'utf-8')
  }

  prepareMessages(input) {
    return input.messages.map(
        message => {
          return this.fixCharacters(message.content)
        }).join(' ');
  }
}
