/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let indexes = [], len = nums.length
  for (let i = 0; i < len; i++) {
    if(nums[i] === 0) {
      nums.push(0)
      indexes.push(i)
    }
  }
  for (let i = 0; i < indexes.length; i++) {
    nums.splice(indexes[i] - i, 1)
  }
  return nums
};

console.log(moveZeroes([0,0,1])); //[1,0,0]
console.log(moveZeroes([0,1,0,3,12])); //[1,3,12,0,0]