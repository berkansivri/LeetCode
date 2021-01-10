/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  const left = {}

  for (let a of A) {
    for (let b of B) {
      left[a + b] = (left[a + b] || 0) + 1
    }
  }

  let count = 0
  for (let c of C) {
    for (let d of D) {
      count += left[-c - d] || 0
    }
  }
  return count
}

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]))
