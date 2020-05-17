/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function (A) {
  let diff = A[1] - A[0],
    count = 0,
    m = 1
  for (let i = 2; i < A.length; i++) {
    if (A[i] - A[i - 1] === diff) {
      count += m++
    } else {
      diff = A[i] - A[i - 1]
      m = 1
    }
  }
  return count
}

console.log(numberOfArithmeticSlices([1, 2, 3, 4])) // 3
console.log(numberOfArithmeticSlices([1, 2, 3, 4, 5])) // 6
console.log(numberOfArithmeticSlices([1, 2, 3, 4, 5, 6])) // 10
console.log(numberOfArithmeticSlices([1, 2, 3, 4, 5, 6, 7])) // 15
console.log(numberOfArithmeticSlices([1, 2, 3, 4, 6, 7, 8, 9]))
