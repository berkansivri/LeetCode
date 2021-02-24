/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const arr = [...nums, ...nums.slice(0, -1)]
  return nums.map((n, i) => arr.slice(i).find(x => x > n) ?? -1)
}

console.log(nextGreaterElements([100, 1, 11, 1, 120, 111, 123, 1, -1, -100])) // [2, -1, 2]
console.log(nextGreaterElements([-1, 0])) // [2, -1, 2]
console.log(nextGreaterElements([1, 2, 1])) // [2, -1, 2]
console.log(nextGreaterElements([1, 5, 3, 6, 8])) // [5,6,6,8,-1]
