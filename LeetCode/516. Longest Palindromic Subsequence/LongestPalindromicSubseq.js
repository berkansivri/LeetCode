/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const len = s.length
  if (len === 1) return len

  let dp = Array(len)
    .fill(null)
    .map(() => Array(len).fill(0))

  for (let i = len - 2; i >= 0; i--) {
    dp[i][i] = 1
    for (let j = i + 1; j < len; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[0][len - 1]
}

console.log(longestPalindromeSubseq('bbbab'))
console.log(longestPalindromeSubseq('cbbd'))
