/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let c = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) c++
    else c = 0
    if (c === 2) {
      nums.splice(i + 1, 1)
      c--
      i--
    }
  }
  return nums.length
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]))
