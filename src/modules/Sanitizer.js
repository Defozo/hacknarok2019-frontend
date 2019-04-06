import EncodingFixer from '@/modules/EncodingFixer'

export default class Sanitizer {
  prepareMessages(input) {
    return input.messages.map(message => EncodingFixer.fixText(message.content)).join(' ')
  }
}
