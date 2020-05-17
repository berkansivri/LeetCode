/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const char = {}
  for (let i = 0; i < s.length; i++) {
    char[s[i]] = char[s[i]] === undefined ? i : null
  }
  const vals = Object.values(char).filter(x => x !== null)
  return vals.length ? vals[0] : -1
}

console.log(firstUniqChar('leetcode'))
console.log(firstUniqChar('loveleetcode'))
