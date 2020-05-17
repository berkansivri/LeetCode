/**
 * @param {number} n
 * @return {string}
 */

var countAndSay = function (n) {
  let str = '1',
    count,
    temp
  for (let i = 1; i < n; i++) {
    count = 1
    temp = str
    str = ''
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] !== temp[j + 1]) {
        str += count + temp[j]
        count = 1
      } else count++
    }
  }
  return str
}
