/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

var wordPattern = function (pattern, str) {
  const arr = str.split(' ')
  const patterns = pattern.split('')
  if (patterns.length !== arr.length) return false

  let map = {}
  for (let s of arr) {
    let p = patterns.shift()
    if (map[p]) {
      if (map[p] !== s) return false
    } else {
      map[p] = s
    }
  }
  let vals = Object.values(map)
  return [...new Set(vals)].length === vals.length
}

var wordPattern2 = function (pattern, str) {
  const temp = str.split(' ')
  if (temp.length !== pattern.length) return false
  let map = {}

  for (let [i, p] of pattern.split('').entries()) {
    if (map[p]) {
      if (map[p] !== temp[i]) return false
    } else {
      if (Object.values(map).some(x => x === temp[i])) return false
      map[p] = temp[i]
    }
  }
  return true
}

console.log(wordPattern('aaa', 'aa aa aa aa'))
console.log(wordPattern('abba', 'dog cat cat dog'))
console.log(wordPattern('abba', 'dog cat cat fish'))
console.log(wordPattern('abba', 'dog dog dog dog'))
console.log(wordPattern('aaaa', 'dog cat cat dog'))
console.log('---------------------------------')
console.log(wordPattern2('abba', 'dog cat cat fish'))
console.log(wordPattern2('abba', 'dog dog dog dog'))
console.log(wordPattern2('abba', 'dog cat cat dog'))
console.log(wordPattern2('aaaa', 'dog cat cat dog'))
