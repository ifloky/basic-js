const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1CharCounts = new Array(26).fill(0);
  for (const char of s1) {
    s1CharCounts[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  let commonCount = 0;
  for (const char of s2) {
    const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
    if (s1CharCounts[index] > 0) {
      commonCount++;
      s1CharCounts[index]--;
    }
  }
  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
