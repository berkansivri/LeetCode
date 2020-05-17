/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (i - map[nums[i]] <= k) return true
    map[nums[i]] = i
  }
  return false
}

console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
