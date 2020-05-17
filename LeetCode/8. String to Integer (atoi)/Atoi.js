/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  var result = ''
  var isPositive = 1

  str = str.trim()
  for (var i = 0; i < str.length; i++) {
    var isNumb = Number.isInteger(parseInt(str[i]))
    if (isNumb) {
      result += str[i]
    } else {
      if (i === 0) {
        if (str[i] === '-') {
          isPositive = -1
        } else if (str[i] === '+') {
          isPositive = 1
        } else {
          break
        }
      } else {
        console.log('break')
        break
      }
    }
  }
  var value = result ? parseInt(result) * isPositive : 0

  if (value === 0) {
    return 0
  } else if (-1 * Math.pow(2, 31) > value) {
    return -1 * Math.pow(2, 31)
  } else if (value > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1
  } else {
    return value
  }
}
