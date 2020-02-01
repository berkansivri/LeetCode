/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function (A) {
  if(A.length === 0) return 0

  let len = A.length,
    max = Number.MIN_SAFE_INTEGER
  
  for (let i = 0; i < len; i++) {
    max = Math.max(max, A.reduce((a, c, i) => a + c * i, 0))
    A.unshift(A.pop())
  }
  return max
};

console.log(maxRotateFunction([-2147483648, -2147483648]));
console.log(maxRotateFunction([4, 3, 2, 6]));