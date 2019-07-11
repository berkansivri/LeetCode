  /**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let min = prices[0], max = 0
  for (let p of prices) {
    if (p < min) min = p
    else if (p - min > max) max = p - min
  }
  return max
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([2, 4, 1]))
console.log(maxProfit([7, 6, 4, 3, 1]))
