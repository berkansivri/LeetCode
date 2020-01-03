/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function (n) {
  if (n === 0) return 1
  
  let result = 10, available = 9, temp = 9
  while (--n > 0 && available > 0) {
    temp *= available--
    result += temp
  }
  return result
};

// f1 = 9 [1-9]
// f2 = 9 * 9 [0 - 9] except first digit
// f3 = f2 * 8 = 9 * 9 * 8
// ...

console.log(countNumbersWithUniqueDigits(3));
