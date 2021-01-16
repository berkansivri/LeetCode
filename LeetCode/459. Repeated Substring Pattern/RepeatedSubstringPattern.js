/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  let sub = '',
    len = s.length
  for (let l of s.slice(0, len / 2)) {
    sub += l
    if (sub.repeat(len / sub.length) === s) {
      return true
    }
  }
  return false
}

// 1-liner
var repeatedSubstringPattern2 = function (s) {
  return s.repeat(2).slice(1, -1).includes(s)
}

console.log(repeatedSubstringPattern('abab'))
console.log(repeatedSubstringPattern('aba'))
console.log(repeatedSubstringPattern('abcabcabcabc'))
