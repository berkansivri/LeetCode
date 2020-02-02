/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n, c = 0) {
  if (n === 1) return c
  if (n % 2 === 0) {
    return integerReplacement(n / 2, c + 1)
  } else {
    return Math.min(integerReplacement(n + 1, c + 1), integerReplacement(n - 1, c + 1))
  }
};

var integerReplacement2 = function (n) {
  const iter = (m, c) => {
    if (m % 2 === 0) {
      return iter(m / 2, c + 1)
    } else {
      if (m === 1) return c
      return Math.min(iter(m + 1, c + 1), iter(m - 1, c + 1))
    }
  }
  return iter(n, 0)
};

console.log(integerReplacement(7));
console.log(integerReplacement(8));
console.log(integerReplacement(15));
console.log(integerReplacement(26));
console.log(integerReplacement(29));