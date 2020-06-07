/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const dp = Array(amount + 1).fill(0)
  dp[0] = 1

  for (let c of coins) {
    for (let i = c; i <= amount; i++) {
      dp[i] += dp[i - c]
    }
  }
  return dp[amount]
}

console.log(change(5, [1, 2, 5]))
console.log(change(3, [2]))
console.log(change(10, [10]))
