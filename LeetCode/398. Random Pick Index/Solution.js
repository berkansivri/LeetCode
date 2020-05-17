/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums.reduce((a, c, i) => {
    if (!a[c]) a[c] = [i]
    else a[c].push(i)
    return a
  }, {})
}

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  return this.nums[target][~~(Math.random() * this.nums[target].length)]
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

const nums = [1, 2, 3, 3, 3]
const solution = new Solution(nums)

// pick(3) should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.
let a = solution.pick(3)
console.log(a)
// pick(1) should return 0. Since in the array only nums[0] is equal to 1.
let b = solution.pick(1)
console.log(b)
