/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let a = Number.MAX_SAFE_INTEGER,
    b = Number.MAX_SAFE_INTEGER
  for (let n of nums) {
    if (n <= a)
      a = n
    else if (n <= b)
      b = n
    else
      return true
  }
  return false
};

console.log(increasingTriplet([5, 1, 5, 5, 2, 5, 4]));
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));