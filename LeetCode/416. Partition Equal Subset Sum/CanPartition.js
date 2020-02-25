/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const target = nums.reduce((a, c) => a + c) / 2
  if (!Number.isInteger(target)) return false

  const memo = new Array(target + 1).fill(false)
  memo[0] = true
  
  for (let num of nums) {
    if (memo[target - num]) return true
    for (let t = target; t >= num; t--) {
      memo[t] = memo[t - num] || memo[t]
    }
  }
  return false
};

console.log(canPartition([23, 13, 11, 7, 6, 5, 5]));
console.log(canPartition([1, 2, 3]));
console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 5]));