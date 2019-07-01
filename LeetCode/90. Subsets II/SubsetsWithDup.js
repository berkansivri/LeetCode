/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  var result = []
  nums.sort((a, b) => a - b)
  const len = nums.length

  const iter = function(arr, start) {
    result.push([...arr])
    for (let i = start; i < len; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue
      arr.push(nums[i])
      iter(arr, i + 1)
      arr.pop()
    }
  }

  iter([], 0)
  return result
}

console.log(subsetsWithDup([1, 2, 2]))
console.log(subsetsWithDup([4, 4, 4, 1, 4]))
