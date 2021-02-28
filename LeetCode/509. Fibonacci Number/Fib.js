/**
 * @param {number} n
 * @return {number}
 */

var fib = function (n) {
  if (n < 2) return n

  let a = 0,
    b = 1

  while (n-- > 1) {
    const sum = a + b
    a = b
    b = sum
  }

  return b
}

// recursion
var fib2 = function (n) {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}

console.log(fib(2))
console.log(fib(3))
console.log(fib(4))
