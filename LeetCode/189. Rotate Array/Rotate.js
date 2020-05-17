/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//First way
var rotate = function (nums, k) {
  nums.unshift(...nums.splice(nums.length - k))
}

//Second way
var rotate2 = function (nums, k) {
  while (k) {
    nums.unshift(nums.pop())
    k--
  }
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 3))

console.log(rotate([-1, -100, 3, 99], 2))
console.log(rotate2([-1, -100, 3, 99], 2))
