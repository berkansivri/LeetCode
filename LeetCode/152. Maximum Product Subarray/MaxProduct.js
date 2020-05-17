/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = Number.MIN_SAFE_INTEGER,
    p = 1
  for (let i = 0; i < nums.length; i++) {
    max = Math.max((p *= nums[i]), max)
    if (nums[i] === 0) p = 1
  }
  p = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    max = Math.max((p *= nums[i]), max)
    if (nums[i] === 0) p = 1
  }
  return max
}

console.log(maxProduct([2, -5, 8, 0, 2, -4, 3]))
console.log(maxProduct([3, -1, 4]))
console.log(maxProduct([-2, 0, -1])) // -1
console.log(maxProduct([2, 3, -2, 4, -6]))
console.log(maxProduct([-1, -1]))
