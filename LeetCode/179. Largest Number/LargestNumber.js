/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  // if (nums.join('') == 0) return '0'
  return nums.sort((a, b) => {
    return (b + '' + a) - (a + '' + b)
  }).join("").replace(/^0*/,'') || '0'
};

console.log(largestNumber([0, 0]));
console.log(largestNumber([1, 2]));
console.log(largestNumber([121, 12]));
console.log(largestNumber([3, 30, 34, 5, 9]));