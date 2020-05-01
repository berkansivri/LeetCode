/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//hashmap
var subarraySum = function(nums, k) {
  let sum = 0, map = {}, res = 0
  map[0] = 1
  for(let num of nums) {
    sum += num
    if(map[sum - k]) res += map[sum - k]
    map[sum] = (map[sum] || 0) + 1
  }
  return res
};

// brute force
var subarraySum2 = function(nums, k) {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if(sum === k) res++
    }
  }
  return res
};

console.log(subarraySum([2,3,4,5], 5)) // 2
console.log(subarraySum([1,1,1], 2)) // 2
console.log(subarraySum([-1, -1, 1], 0)) // 2
console.log(subarraySum([1], 0)) // 2
console.log(subarraySum([1,1,3,4,5], 2)) // 2
console.log(subarraySum([1,2,1,3,5,6,7,2,1,3,4,1], 3)) // 2