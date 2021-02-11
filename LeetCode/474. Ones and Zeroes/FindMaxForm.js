/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const dp = Array(m + 1)
    .fill(null)
    .map(() =>
      Array(n + 1)
        .fill(null)
        .map(() => Array(strs.length))
    )
  return findMaxFormStartingWith(strs, m, n, 0, dp)
}

const findMaxFormStartingWith = (strs, m, n, i, dp) => {
  if (i === strs.length || m + n === 0) return 0
  if (dp[m][n][i] !== undefined) {
    return dp[m][n][i]
  }

  let countByAddingString = 0
  const ones = strs[i].split('').reduce((a, c) => +a + +c, 0)
  const zeroes = strs[i].length - ones

  if (m >= zeroes && n >= ones) {
    countByAddingString = 1 + findMaxFormStartingWith(strs, m - zeroes, n - ones, i + 1, dp)
  }
  let countBySkippingString = findMaxFormStartingWith(strs, m, n, i + 1, dp)

  dp[m][n][i] = Math.max(countByAddingString, countBySkippingString)
  return dp[m][n][i]
}

console.log(findMaxForm(['10', '0', '1'], 1, 1))
console.log(findMaxForm(['111', '1000', '1000', '1000'], 9, 3))
console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3))
