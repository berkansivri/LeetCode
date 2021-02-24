/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
  return words.filter(word => rows.some(row => [...word.toLowerCase()].every(char => row.includes(char))))
}

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']))
console.log(findWords(['omk']))
console.log(findWords(['asdf', 'sdf']))
