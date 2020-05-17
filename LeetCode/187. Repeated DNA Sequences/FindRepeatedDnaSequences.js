/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let set = new Set()
  for (let i = 0; i < s.length - 9; i++) {
    let temp = s.substring(i, i + 10)
    if (s.indexOf(temp, i + 1) > -1) {
      if (!set.has(temp)) set.add(temp)
    }
  }
  return Array.from(set)
}

console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'))
console.log(findRepeatedDnaSequences('AAAAAAAAAAAA'))
