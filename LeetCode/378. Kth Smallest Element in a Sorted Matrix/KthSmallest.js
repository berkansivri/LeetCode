/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function (matrix, k) {
  let n = matrix.length
  let high = matrix[n - 1][n - 1],
    low = matrix[0][0]

  while (low < high) {
    let mid = ~~(low + (high - low) / 2)
    let count = 0

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] <= mid) count++
        else break
      }
    }
    if (count < k) low = mid + 1
    else high = mid
  }
  return low
}

// 1-liner faster
var kthSmallest2 = function (matrix, k) {
  return [].concat(...matrix).sort((a, b) => a - b)[k - 1]
}

// 1-liner slower
var kthSmallest3 = function (matrix, k) {
  return matrix.reduce((a, c) => a.concat(c), []).sort((a, b) => a - b)[k - 1]
}

console.log(kthSmallest([[-5]], 1))

console.log(
  kthSmallest(
    [
      [1, 2],
      [1, 3]
    ],
    3
  )
)

console.log(
  kthSmallest(
    [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15]
    ],
    8
  )
)
