/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  if (!amount || !coins.length) return 0

  let arr = [0],
    len = coins.length,
    index = 1

  while (!arr[amount]) {
    arr[index] = Infinity
    for (let i = 0; i < len; i++) {
      if (coins[i] <= index) {
        arr[index] = Math.min(arr[index], 1 + arr[index - coins[i]])
      }
    }
    index++
  }
  return arr[amount] === Infinity ? -1 : arr[amount]
};

console.log(coinChange([1, 2, 5], 11)); // 5 + 5 + 1
console.log(coinChange([186, 419, 83, 408], 6249)); // -1
console.log(coinChange([1, 2147483647], 2)); // -1
console.log(coinChange([2], 3)); // -1
console.log(coinChange([1, 2, 5, 7], 21)); // -1