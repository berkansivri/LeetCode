/**
 * @param {number[]} nums
 * @return {number}
 */
// 0(1) space - O(n) time
var wiggleMaxLength = function (nums) {
  if (nums.length === 0) return 0
  let up = 1,
    down = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) down = up + 1
    else if (nums[i] > nums[i - 1]) up = down + 1
  }

  return Math.max(up, down)
}

var wiggleMaxLength2 = function (nums) {
  if (nums.length === 0) return 0
  const up = [1],
    down = [1]

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      up[i] = down[i - 1] + 1
      down[i] = down[i - 1]
    } else if (nums[i] < nums[i - 1]) {
      down[i] = up[i - 1] + 1
      up[i] = up[i - 1]
    } else {
      down[i] = down[i - 1]
      up[i] = up[i - 1]
    }
  }
  return Math.max(down[down.length - 1], up[up.length - 1])
}

console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]))
console.log(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]))
console.log(wiggleMaxLength([1, 2, 3, 4, 5, 6, 7, 8, 9]))

console.log('---------------------')
console.log(wiggleMaxLength2([1, 7, 4, 9, 2, 5]))
console.log(wiggleMaxLength2([1, 17, 5, 10, 13, 15, 10, 5, 16, 8]))
console.log(wiggleMaxLength2([1, 2, 3, 4, 5, 6, 7, 8, 9]))
