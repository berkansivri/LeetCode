var maxProfit = function(prices) {
  let min = prices[0], profits = [], max = 0, buyIndex = 0, sellIndex = 0, len = prices.length

  for (let [i, p] of prices.entries()) {
    if (p < min) {
      min = p
      buyIndex = i
    } else if (p - min > max) {
      max = p - min
      sellIndex = i
      profits.push([buyIndex, sellIndex])
    }
  }

  for (let [i, profit] of profits.entries()) {
    let arr = prices.slice(profit[1] + 1, len)
    ;(max = 0), (min = arr[0])
    for (let p of arr) {
      if (p < min) min = p
      else if (p - min > max) max = p - min
    }
    profits[i] = prices[profit[1]] - prices[profit[0]] + max
  } 
  return profits.length ? Math.max(...profits) : 0
}

console.log(maxProfit([7, 6, 4, 3, 1]))
console.log(maxProfit([1,2,3,4,5]))
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))
