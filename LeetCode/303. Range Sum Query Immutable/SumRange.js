/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.sums = []
  nums.reduce((a, c) => {
    let sum = a + c
    this.sums.push(a + c)
    return sum
  }, 0)
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.sums[j] - (this.sums[i - 1] || 0)
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

let a = new NumArray([-2, 0, 3, -5, 2, -1])
console.log(a.sumRange(0, 2));
console.log(a.sumRange(2, 5));
console.log(a.sumRange(0, 5));