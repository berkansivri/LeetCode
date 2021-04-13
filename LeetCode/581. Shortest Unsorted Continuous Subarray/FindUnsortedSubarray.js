/**
 * @param {number[]} nums
 * @return {number}
 */
// slow
var findUnsortedSubarray = function (nums) {
  let start = nums.length,
    end = 0

  for (let i = 0, j = i; i < nums.length - 1; i++, j = i) {
    while (nums[j + 1] < nums[j]) {
      ;[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
      start = Math.min(start, j)
      end = Math.max(end, j + 1)
      j--
    }
  }

  return Math.max(end - start + 1, 0)
}

// 1-liner
var findUnsortedSubarray2 = nums =>
  [...nums]
    .sort((a, b) => a - b)
    .reduce((a, c, i) => a + (c === nums[i] ? ' ' : 'x'), '')
    .trim().length

console.log(findUnsortedSubarray([2, 15, 4, 8, 10, 1, 7]))
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 1, 15]))
console.log(findUnsortedSubarray([2, 1]))
console.log(findUnsortedSubarray([1, 2, 3, 4]))
