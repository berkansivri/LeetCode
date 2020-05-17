/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function (nums) {
  let max = 0
  for (let i of nums) for (let j of nums) max = Math.max(max, i ^ j)
  return max
}

console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]))
