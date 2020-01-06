/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num === 1) return true
  let x = 2
  while (1) {
    if (x * x < num) x++
    else if (x * x > num) return false
    else return true
  }
  return false
};

console.log(isPerfectSquare(9));
console.log(isPerfectSquare(1));
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));
