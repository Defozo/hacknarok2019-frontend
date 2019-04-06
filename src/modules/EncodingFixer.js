import iconv from 'iconv-lite'

export default class EncodingFixer {
    static fixText(text) {
        return iconv.decode(iconv.encode(text, 'ISO-8859-1'), 'utf-8')
    }
}
