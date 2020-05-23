/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const arr = s.split('').sort()
  const char = arr.reduce((a, c) => {
    a[c] = ++a[c] || 1
    return a
  }, {})

  return arr.sort((a, b) => char[b] - char[a]).join('')
}

console.log(frequencySort('loveleetcode')) //eetr
console.log(frequencySort('tree')) //eetr
console.log(frequencySort('cccaaa')) //aaaccc / cccaaa
console.log(frequencySort('Aabb')) //bbAa // bbaA
