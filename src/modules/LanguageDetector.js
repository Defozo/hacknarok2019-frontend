/**
 * @author Michał Kiełtyka
 * @type {module:languagedetect}
 */

const LanguageDetect = require('languagedetect');
const lngDetector = new LanguageDetect();

/**
 * Takes every message into LanguageDetect().detect(message) which returns languages with confidence scores.
 * Then, sums confidences and divide them by number of messages.
 *
 * Note: Not very reliable way to detect languages but may give some better results when tested on bigger dataset.
 *
 * @param {string[]} messages Messages to analyze.
 * @returns {Object} Object with keys as languages and values as averaged confidence scores (between messages).
 */
export function getAverageConfidenceScoresOfDetectedLanguages(messages) {
    let languagesWithConfidencesMap = {};
    for (let i = 0; i < messages.length; i++) {
        let languagesWithConfidencesArray = lngDetector.detect(messages[i]);
        languagesWithConfidencesArray.forEach(function(entry) {
            languagesWithConfidencesMap[entry[0]] = (languagesWithConfidencesMap[entry[0]] || 0) + entry[1];
        });
    }
    Object.keys(languagesWithConfidencesMap).forEach(function (key) {
        languagesWithConfidencesMap[key] = languagesWithConfidencesMap[key] / messages.length;
    });
    return languagesWithConfidencesMap;
}
