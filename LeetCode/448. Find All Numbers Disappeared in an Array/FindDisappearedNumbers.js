/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const res = []
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1
    if (nums[index] > 0) nums[index] *= -1
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res.push(i + 1)
    }
  }
  return res
}

var findDisappearedNumbers2 = function (nums) {
  const result = []
  let length = nums.length

  nums = [...new Set(nums)].sort((a, b) => a - b)

  for (let i = 0; i < length; i++) {
    if (nums[i] !== i + 1) {
      result.push(i + 1)
      nums.splice(i, 0, i + 1)
    }
  }
  return result
}

console.log(findDisappearedNumbers2([10, 2, 5, 10, 9, 1, 1, 4, 3, 7]))
console.log(findDisappearedNumbers2([4, 3, 2, 7, 8, 2, 3, 1]))
console.log(findDisappearedNumbers2([1, 1]))
