/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let total = nums.length
  for (let i = 0; i < nums.length; i++) {
    total = total + i - nums[i]
  }
  return total
};

var missingNumber2 = function(nums) {
  const total = (nums.length * (nums.length + 1)) / 2
  return total - nums.reduce((a,c) => a + c)  
};

//0,1,3
// console.log(missingNumber([]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
console.log(missingNumber([0]));
console.log(missingNumber([1]));
console.log(missingNumber([3,0,1]));