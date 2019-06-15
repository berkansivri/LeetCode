/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let i = digits.length - 1
  digits[i] += 1
  while (digits[i] >= 10) {
    digits[i] = digits[i] % 10;
    i--;
    i < 0 ? digits = [1, ...digits] : digits[i] += 1
  }
  return digits
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]))