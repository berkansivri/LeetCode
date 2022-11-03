/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let map = {}

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) map.dublicate = nums[i]
    map[nums[i]] = true
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!map[i]) return [map.dublicate, i]
  }
}
