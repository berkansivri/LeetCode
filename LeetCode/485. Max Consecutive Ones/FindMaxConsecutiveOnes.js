/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0, count = 0
    for (const num of nums) {
      if(num === 1) max = Math.max(max, ++count)
      else count = 0
    }
    return max
};

findMaxConsecutiveOnes([1,1,0,1,1,1])