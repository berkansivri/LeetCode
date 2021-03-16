/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let str = ''

  for (let i = 0; i < s.length; i += k * 2) {
    str += s.substr(i, k).split('').reverse('').join('') + s.substr(i + k, k)
  }

  return str
}

console.log(reverseStr('abcdefg', 2))
console.log(reverseStr('abcd', 2))
