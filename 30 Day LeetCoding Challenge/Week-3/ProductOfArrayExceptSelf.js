/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const output = []

  nums.reduce((a, c, i) => {
    output[i] = a
    return a * c
  }, 1)

  nums.reduceRight((a, c, i) => {
    output[i] *= a
    return a * c
  }, 1)

  return output
}

console.log(productExceptSelf([9, 0, -2]))
console.log(productExceptSelf([1, 0]))
console.log(productExceptSelf([0, 0]))
console.log(productExceptSelf([1, 2, 3, 4]))


// one liner & slow
// return nums.map((n, i) => nums.reduce((p, c, j) => (i !== j && (p *= c), p), 1))