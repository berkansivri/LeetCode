/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function (envelopes) {
  if (envelopes.length < 2) return envelopes.length

  envelopes.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1]
    else return a[0] - b[0]
  })

  let dp = new Array(envelopes.length).fill(1)
  let max = 0

  for (let i = 0; i < envelopes.length; i++) {
    for (let j = 0; j < i; j++) {
      if (envelopes[i][0] > envelopes[j][0] && envelopes[i][1] > envelopes[j][1]) dp[i] = Math.max(dp[i], dp[j] + 1)
      max = Math.max(dp[i], max)
    }
  }

  return max
}

console.log(
  maxEnvelopes([
    [5, 4],
    [6, 4],
    [6, 7],
    [2, 3]
  ])
)
