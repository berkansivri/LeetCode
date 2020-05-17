/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map(),
    len = nums.length
  for (let num of nums) {
    map[num] = map[num] !== undefined ? map[num] + 1 : 1
    if (map[num] > len / 2) return num
  }
}

var majorityElement2 = function (nums) {
  nums.sort((a, b) => b - a)
  return nums[parseInt(nums.length / 2)]
}

console.log(majorityElement2([6, 5, 5]))
console.log(majorityElement2([2, 2, 1, 1, 1, 2, 2]))
console.log(majorityElement([6, 5, 5]))
console.log(majorityElement([1]))
console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
