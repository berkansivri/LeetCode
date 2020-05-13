/**
 * @param {number[]} nums
 * @return {number}
 */

// O(logn)
var singleNonDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) return nums[i]
  }
}

// oneliner
var singleNonDuplicate2 = function (nums) {
  return nums.reduce((a, c) => (a ^= c), null)
}

// xor
var singleNonDuplicate3 = function (nums) {
  let res
  for (let n of nums) res ^= n
  return res
}

console.log(singleNonDuplicate([1]))
console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8], 2))
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11], 10))
