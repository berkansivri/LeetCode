/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfThree = function (n) {
  return n >= 0 && 3486784401 % n === 0 // maximum integer of 3^19
};

var isPowerOfThree2 = function (n) {
  let m = 1
  while (1) {
    if (m < n) m *= 3
    else if (m > n) return false
    else return true
  }
};

var isPowerOfThree3 = function (n) {
  if (n === 1) return true
  if (n >= 0 && n < 3) return false
  return isPowerOfThree(n / 3)
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(45));
console.log(isPowerOfThree(81));
console.log(isPowerOfThree(82));