/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0
  nums = [...new Set(nums.sort((a, b) => a - b))]
  let k = 0,
    counts = [k]
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] - nums[i] === 1) {
      counts[k]++
    } else {
      k++
      counts[k] = 0
    }
  }
  return (Math.max(...counts) + 1)
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([200]));
console.log(longestConsecutive([1, 2, 0, 1]));
console.log(longestConsecutive([]));