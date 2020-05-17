/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.sums = []
  this.nums = nums
  this.len = nums.length
  nums.reduce((a, c) => {
    let sum = a + c
    this.sums.push(sum)
    return sum
  }, 0)
}

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (i, val) {
  let sumVal = val - this.nums[i]
  for (let j = i; j < this.len; j++) {
    this.sums[j] += sumVal
  }
  this.nums[i] = val
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.sums[j] - (this.sums[i - 1] || 0)
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */

let a = new NumArray([7, 2, 7, 2, 0])
a.update(4, 6)
a.update(0, 2)
a.update(0, 9)
console.log(a.sumRange(4, 4))
a.update(3, 8)
console.log(a.sumRange(0, 4))
console.log(a.sumRange(4, 1))
console.log(a.sumRange(0, 3))
console.log(a.sumRange(0, 4))
a.update(0, 4)
