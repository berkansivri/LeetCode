/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const len = s.length
  for (let i = 0, j = len - 1; i < j; i++, j--) {
    ;[s[i], s[j]] = [s[j], s[i]]
  }
}

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))
console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']))
