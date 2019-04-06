import sentiment from 'sentiment-polish'

export default class SentimentAnalizer {
  static getAverageSentiment(texts) {
    let scoreSum = 0

    for (let i = 0; i < texts.length; i++) {
      scoreSum += sentiment(texts[i]).score
    }

    return scoreSum / texts.length
  }
}
