/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {
  if (p.length === 0) return 0
  const dp = new Array(26).fill(0)
  dp[p[0].charCodeAt() - 97] = 1

  let currentMax = 1
  for (let i = 1; i < p.length; i++) {
    const prevCharIdx = p[i - 1].charCodeAt() - 97
    let charIdx = p[i].charCodeAt() - 97

    if (charIdx - prevCharIdx === 1 || charIdx - prevCharIdx === -25) {
      currentMax++
    } else {
      currentMax = 1
    }
    dp[charIdx] = Math.max(dp[charIdx], currentMax)
  }

  return dp.reduce((acc, val) => acc + val)
}

console.log(findSubstringInWraproundString('a'))
console.log(findSubstringInWraproundString('cac'))
console.log(findSubstringInWraproundString('zab'))
