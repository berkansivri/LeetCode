/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  let max = 0,
    len = words.length
  for (let i = 0; i < len - 1; i++) {
    const arr = words[i].split('')
    const len1 = arr.length
    for (let j = i + 1; j < len; j++) {
      const val = len1 * words[j].length
      if (val < max) continue
      if (!arr.some(l => words[j].includes(l))) {
        max = val
      }
    }
  }
  return max
}

console.log(maxProduct(['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef'])) // 16 (4*4)
console.log(maxProduct(['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd'])) // 4 (2*2)
console.log(maxProduct(['a', 'aa', 'aaa', 'aaaa'])) // 0
