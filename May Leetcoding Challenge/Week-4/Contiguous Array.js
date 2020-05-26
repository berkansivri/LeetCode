/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  let hash = { 0: -1 },
    count = 0,
    max = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) count--
    else count++
    if (hash[count] !== undefined) max = Math.max(max, i - hash[count])
    else hash[count] = i
  }

  return max
}

console.log(findMaxLength([0, 1]))
console.log(findMaxLength([0, 1, 0]))
