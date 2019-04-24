/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  var quotient = 0;
  var multiplyBy = dividend * divisor < 0 ? -1 : 1;
  var max = Math.pow(2, 31);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  if (Math.abs(divisor) === 1) {
    if (dividend >= max) {
      return multiplyBy > 0 ? max - 1 : max * -1;
    } else {
      return dividend * multiplyBy;
    }
  }
  while (dividend >= divisor) {
    dividend = dividend - divisor;
    quotient++;
  }
  if (quotient >= max) {
    return multiplyBy > 0 ? max - 1 : max - -1;
  } else {
    return quotient * multiplyBy;
  }
};
