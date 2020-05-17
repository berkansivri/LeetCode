/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'],
    str = s.split('')
  let i = 0,
    j = s.length - 1
  while (i < j) {
    if (vowels.includes(s[i]) && vowels.includes(s[j])) {
      ;[str[i], str[j]] = [str[j], str[i]]
      i++
      j--
    } else {
      if (!vowels.includes(s[i])) str[i] = s[i++]
      if (!vowels.includes(s[j])) str[j] = s[j--]
    }
  }
  return str.join('')
}

var reverseVowels2 = function (s) {
  const vowels = { A: 1, E: 1, I: 1, O: 1, U: 1, a: 1, e: 1, i: 1, o: 1, u: 1 }
  const stack = [],
    str = s.split(''),
    indexes = []
  for (let i = 0; i < str.length; i++) {
    if (vowels[s[i]]) {
      stack.push(s[i])
      indexes.push(i)
    }
  }
  indexes.forEach(i => (str[i] = stack.pop()))
  return str.join('')
}

console.log(reverseVowels2('Euston saw I was not Sue.'))
console.log(reverseVowels('aA'))
console.log(reverseVowels('.a'))
console.log(reverseVowels('a.'))
console.log(reverseVowels(' '))
console.log(reverseVowels('hello'))
console.log(reverseVowels('hannah'))
console.log(reverseVowels('leetcode'))
