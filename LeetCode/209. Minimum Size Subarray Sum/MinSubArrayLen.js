/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let i = 0,
    j = 0,
    sum = 0,
    min = Number.MAX_SAFE_INTEGER
  while (j < nums.length) {
    sum += nums[j++]

    while (sum >= s) {
      min = Math.min(min, j - i)
      sum -= nums[i++]
    }
  }
  return min === Number.MAX_SAFE_INTEGER ? 0 : min
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
