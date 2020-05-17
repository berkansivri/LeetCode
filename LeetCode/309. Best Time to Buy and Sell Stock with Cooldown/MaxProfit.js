/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let sell = 0,
    prevSell = 0,
    buy = Number.MIN_SAFE_INTEGER,
    prevBuy
  for (let price of prices) {
    prevBuy = buy
    buy = Math.max(prevSell - price, prevBuy)
    prevSell = sell
    sell = Math.max(prevBuy + price, prevSell)
  }
  return sell
}

console.log(maxProfit([1, 2, 3, 0, 2]))
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]))
console.log(maxProfit([]))
console.log(maxProfit([2, 4]))
