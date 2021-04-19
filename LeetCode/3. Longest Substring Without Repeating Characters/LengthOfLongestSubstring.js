/**
 * @param {string} s
 * @return {number}
 */
function findLongestSubstring(str) {
  const seen = new Map()
  let start = 0
  let maxLen = 0

  for (let i = 0; i < str.length; i++) {
    if (seen.has(str[i])) {
      start = Math.max(start, seen.get(str[i]) + 1)
    }
    seen.set(str[i], i)
    maxLen = Math.max(maxLen, i - start + 1)
  }

  return maxLen
}

console.log(findDiagonalOrder('abcabcbb'))
console.log(findDiagonalOrder('bbbbbb'))
console.log(findDiagonalOrder('pwwkew'))
console.log(findDiagonalOrder(''))
