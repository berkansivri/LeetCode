/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if(nums.length === 0) return []
  const res = []
  for (let i = 0; i < nums.length - k + 1; i++) {
    res.push(Math.max(...nums.slice(i, k+i))) 
  }
  return res
};

console.log(maxSlidingWindow([], 0));
console.log(maxSlidingWindow([1, -1], 1));
console.log(maxSlidingWindow([1], 1));
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
