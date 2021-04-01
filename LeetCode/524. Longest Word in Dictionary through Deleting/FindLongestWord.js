/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  dictionary.sort((a, b) => b.length - a.length || a.localeCompare(b))

  for (const word of dictionary) {
    let i = 0
    for (const c of s) {
      if (i < word.length && c === word[i]) i++
    }

    if (i === word.length) return word
  }

  return ''
}

console.log(
  findLongestWord('aewfafwafjlwajflwajflwafj', ['apple', 'ewaf', 'awefawfwaf', 'awef', 'awefe', 'ewafeffewafewf'])
)
console.log(findLongestWord('abpcplea', ['ale', 'apple', 'monkey', 'plea']))
console.log(findLongestWord('abpcplea', ['b', 'a', 'c']))
