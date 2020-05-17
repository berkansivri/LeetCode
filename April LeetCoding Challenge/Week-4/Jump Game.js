/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function (nums) {
  let pos = nums.length - 1
  for (let i = pos; i >= 0; i--) {
    if (i + nums[i] >= pos) pos = i
  }
  return pos === 0
}

var canJump2 = function (nums) {
  let last = nums.length - 1
  if (last === 0) return true

  let map = {}
  for (let i = last - 1; i >= 0; i--) {
    let maxIndex = nums[i] + i
    map[i] = maxIndex >= last
    let j = i + 1
    while (!map[i] && j <= maxIndex) {
      map[i] = map[j++]
    }
  }
  return map[0]
}

console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([0, 2]))
console.log(canJump([1, 2]))
console.log(canJump([0]))
console.log(canJump([3, 2, 1, 0, 4]))
