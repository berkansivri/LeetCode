/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let map = { 0: 0, 1: 0, 2: 0 }
  for (let n of nums) {
    map[n]++
  }
  let k = 0
  for (let item in map) {
    for (let i = 0; i < map[item]; i++) {
      nums[k] = +item
      k++
    }
  }
}

console.log(sortColors([2, 0, 2, 1, 1, 0]))
