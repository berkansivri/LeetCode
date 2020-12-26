/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const res = []

  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i])
    let index = num - 1

    if (nums[index] > 0) {
      nums[index] *= -1
    } else {
      res.push(num)
    }
  }

  return res
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))
