/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let arr = []
  while (s.length >= t.length) {
    arr.push(iter(s, t))
    do {
      s = s.substr(1)
    } while (s.length > t.length && !t.includes(s[0]))
  }
  arr = arr.filter(x => x)
  return arr.length > 0 ? arr.sort((a, b) => a.length - b.length)[0] : ''
}

function iter(s, t) {
  let str = '',
    lastIndex = 0
  for (let i = 0; i < s.length; i++) {
    if (t.includes(s[i])) {
      t = t.slice(0, t.indexOf(s[i])) + t.slice(t.indexOf(s[i]) + 1, t.length)
      str += s.slice(lastIndex, i + 1)
      lastIndex = i + 1
    }
  }
  return t ? null : str
}

console.log(minWindow('ADOBECODEBANC', 'ABC'))
