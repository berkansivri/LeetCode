/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findMaxAverage = function(nums, k) {
    
  let lastTotal = nums.slice(0, k).reduce((a,c) => a+c)
  let maxAvg = lastTotal / k
  for(let i=1;i<=nums.length-k;i++) {
      lastTotal = lastTotal - nums[i-1] + nums[i+k-1]
      maxAvg = Math.max(maxAvg, lastTotal / k)
  }
  return maxAvg
};

//findMaxAverage([0,4,0,3,2], 1)