/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const arr = [...new Set(nums.sort((a, b) => b - a))]
  return arr.length > 2 ? arr[2] : arr[0]
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1]));
console.log(thirdMax([2]));