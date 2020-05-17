/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const chars = magazine.split('').reduce((a, c) => ((a[c] = (a[c] || 0) + 1), a), {})

  for (let l of ransomNote) {
    if (chars[l]) chars[l]--
    else return false
  }
  return true
}

console.log(canConstruct('a', 'b'))
console.log(canConstruct('aa', 'ab'))
console.log(canConstruct('aa', 'aab'))
