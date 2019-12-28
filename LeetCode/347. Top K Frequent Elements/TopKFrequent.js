/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const numCounts = nums.reduce((a,c) => ((a[c] = (a[c] || 0) + 1), a), {})
  return Object.keys(numCounts).sort((a, b) => numCounts[b] - numCounts[a]).slice(0,k)
};

console.log(topKFrequent([1,1,1,2,2,3], 2));
console.log(topKFrequent([1], 1));
