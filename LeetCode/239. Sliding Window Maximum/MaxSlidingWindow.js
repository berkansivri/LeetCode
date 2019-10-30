/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const res = [], len = nums.length
  for (let i = 0; len > 0 && i < len - k + 1; i++) {
    res.push(Math.max(...nums.slice(i, k + i)))
  }
  return res
  // 1-line version
  return nums.reduce((res, cur, i) => (i < nums.length - k + 1 && res.push(Math.max(...nums.slice(i, k + i))), res), [])
};

console.log(maxSlidingWindow([], 0));
console.log(maxSlidingWindow([1, -1], 1));
console.log(maxSlidingWindow([1], 1));
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));