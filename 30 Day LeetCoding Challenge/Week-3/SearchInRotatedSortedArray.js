/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let i = 0,
    len = nums.length
  if (len === 0) return -1

  while (nums[i] !== true) {
    if (target > nums[i]) {
      nums[i] = true
      i = ++i % len
    } else if (target < nums[i]) {
      nums[i] = true
      i = (i || len) - 1
    } else {
      return i
    }
  }
  return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2], 0))
console.log(search([1], 0))
console.log(search([1, 2], 0))
console.log(search([], 5))
console.log(search([4, 5, 6, 7, 0, 1, 2], 3))
