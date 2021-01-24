/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  const mid = nums.sort((a, b) => a - b)[~~(nums.length / 2)]
  return nums.reduce((a, c) => a + Math.abs(mid - c), 0)
}

console.log(minMoves2([1, 2, 4]))
