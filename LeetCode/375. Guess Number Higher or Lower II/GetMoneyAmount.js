/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
  const dp = Array(n + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(Infinity))

  const minimax = (l, r) => {
    if (l >= r) return 0
    if (dp[l][r] !== Infinity) return dp[l][r]

    for (let i = l; i <= r; i++) {
      dp[l][r] = Math.min(dp[l][r], i + Math.max(minimax(i + 1, r), minimax(l, i - 1)))
    }
    return dp[l][r]
  }

  return minimax(1, n)
}

console.log(getMoneyAmount(2))
console.log(getMoneyAmount(10))
