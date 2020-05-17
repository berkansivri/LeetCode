/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let substring = ''
  let startIndex = 0
  let temp = ''

  for (let i = 0; i < s.length; i++) {
    temp += s[i]

    if (substring.length < temp.length) {
      substring = [...temp]
    }

    if (s[i + 1] && temp.includes(s[i + 1])) {
      temp = ''
      i = startIndex++
      continue
    }
  }
  return substring.length
}
