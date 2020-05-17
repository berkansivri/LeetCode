/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let number = 0,
    l = s.length
  for (let i = 0; i < l; i++) {
    number += (s.charCodeAt(i) - 64) * Math.pow(26, l - i - 1)
  }
  return number
}

console.log(titleToNumber('AB'))
