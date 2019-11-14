/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  return n % 4 !== 0
  return (n - 1) % 4 === 0 || (n - 2) % 4 === 0 || (n - 3) % 4 === 0
};

console.log(canWinNim(4));
console.log(canWinNim(5));
console.log(canWinNim(8));
console.log(canWinNim(9));