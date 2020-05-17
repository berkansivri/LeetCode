/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (roman) {
  const I = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX']
  const X = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC']
  const C = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
  const M = ['', 'M', 'MM', 'MMM']

  var obj = { roman }
  var result = 0

  result += (searchChars(obj, I) || 0) * 1
  result += (searchChars(obj, X) || 0) * 10
  result += (searchChars(obj, C) || 0) * 100
  result += (searchChars(obj, M) || 0) * 1000

  return result
}

var searchChars = function (obj, arr) {
  for (let i = 4; i > 0; i--) {
    var substr = obj.roman.substr(obj.roman.length - i < 0 ? 0 : obj.roman.length - i, i)
    if (arr.includes(substr)) {
      obj.roman = obj.roman.replace(substr, '')
      return arr.indexOf(substr)
    }
  }
}
