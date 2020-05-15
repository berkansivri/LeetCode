/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function (A) {
  let total = 0,
    maxSum = Number.MIN_SAFE_INTEGER,
    curMax = 0,
    minSum = Number.MAX_SAFE_INTEGER,
    curMin = 0

  for (let a of A) {
    curMax = Math.max(curMax + a, a)
    maxSum = Math.max(maxSum, curMax)
    curMin = Math.min(curMin + a, a)
    minSum = Math.min(minSum, curMin)
    total += a
  }
  return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum
}

console.log(maxSubarraySumCircular([5, -3, 5])) // 10
console.log(maxSubarraySumCircular([-2, -3, -1])) // -1
console.log(maxSubarraySumCircular([-2, 4, -5, 4, -5, 9, 4])) // 15
console.log(maxSubarraySumCircular([3, 1, 3, 2, 6])) // 15
console.log(maxSubarraySumCircular([6, 9, -3])) // 15
console.log(maxSubarraySumCircular([1, -2, 3, -2])) // 3
console.log(maxSubarraySumCircular([3, -1, 2, -1])) // 4
console.log(maxSubarraySumCircular([3, -2, 2, -3])) // 3
