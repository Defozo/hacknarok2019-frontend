/**
 * @author Michał Kiełtyka
 */

const sentiment = require('sentiment-polish');

/**
 * Calculates average sentiment score for given messages.
 * @param messages Messages to get average sentiment score for.
 * @returns {number} Average sentiment for given messages. Vary from -5 to 5.
 */
export function getAverageSentimentScore(messages) {
  let scoreSum = 0;
  for (let i = 0; i < messages.length; i++) {
    scoreSum += sentiment(messages[i]).score;
  }
  return scoreSum / messages.length;
}
