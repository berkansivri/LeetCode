/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  let count = 0,
    len = nums.length

  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      i--
      count++
    }
  }
  nums.push(...Array(count).fill(0))
}

var moveZeroes2 = function (nums) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]
      if (i > j) nums[i] = 0
      j++
    }
  }
  return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
console.log(moveZeroes([0, 0, 1]))
