/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let first = new Map(),
    second = new Map()
  for (let i = 0; i < s.length; i++) {
    if (first[s[i]] && first[s[i]] !== t[i]) return false
    else if (second[t[i]] && second[t[i]] !== s[i]) return false
    else {
      first[s[i]] = t[i]
      second[t[i]] = s[i]
    }
  }
  return true
}

console.log(isIsomorphic('ab', 'aa')) //false
console.log(isIsomorphic('paper', 'title')) //true
console.log(isIsomorphic('aba', 'baa'))
console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
