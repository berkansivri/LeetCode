// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(x, y) {
  if (y === 0) return 1
  return x * power(x, y - 1)
}

// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(x) {
  if (x < 2) return 1
  return x * factorial(x - 1)
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(nums) {
  if (nums.length === 0) return 1
  return nums[0] * productOfArray(nums.slice(1))
}

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(n) {
  if (n === 1) return 1
  return n + recursiveRange(n - 1)
}

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(n) {
  if (n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
}
