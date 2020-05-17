/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) return 0
  let a = 0,
    b = 0
  for (let i = 0; i < nums.length; i++) {
    i % 2 === 0 ? (a = Math.max(a + nums[i], b)) : (b = Math.max(b + nums[i], a))
  }
  return Math.max(a, b)
}

var rob2 = function (nums) {
  if (!nums.length) return 0
  let max = 0,
    p = 0,
    temp
  for (let n of nums) {
    temp = max
    max = Math.max(p + n, max)
    p = temp
  }
  return max
}

console.log(rob([2, 1, 1, 2]))
console.log(rob([0]))
console.log(rob([2, 7, 9, 3, 1, 5]))
console.log(rob([2, 7, 9, 3, 1])) // 2 7 11 11 12
console.log(rob([1, 2]))
console.log(rob([]))
console.log(rob([1, 2, 3, 1]))
