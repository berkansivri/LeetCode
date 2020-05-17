/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  var min, max, rotateIndex
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      rotateIndex = i + 1
      max = nums[i]
      min = nums[i + 1]
      break
    }
  }
  if (!rotateIndex) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) return i
    }
  } else if (target < min || target > max) return -1
  else if (target < nums[0]) {
    for (let i = rotateIndex; i < nums.length; i++) if (nums[i] === target) return i
  } else for (let i = 0; i < rotateIndex; i++) if (nums[i] === target) return i

  return -1
}
