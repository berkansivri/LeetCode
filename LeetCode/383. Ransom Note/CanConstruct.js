/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const chars = {}
  for (let l of magazine) {
    chars[l] = (chars[l] || 0) + 1
  }
  for (let l of ransomNote) {
    if (!chars[l]) return false
    chars[l]--
  }
  return true
}

console.log(canConstruct('a', 'b')) // false
console.log(canConstruct('aa', 'ab')) // false
console.log(canConstruct('aa', 'aab')) // true
