/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let min = nums[0]
  let sum = 0

  for (let n of nums) {
    min = Math.min(min, n)
    sum += n
  }

  return sum - min * nums.length
}
