/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length,
    n = m > 0 ? matrix[0].length : 0
  for (let i = 0; i < m; i++) {
    if (target <= matrix[i][n - 1]) {
      if (target - matrix[i][0] < matrix[i][n - 1] - target) {
        for (let j = 0; j < n - 1; j++) {
          if (matrix[i][j] === target) return true
        }
      } else {
        for (let j = n - 1; j >= 0; j--) {
          if (matrix[i][j] === target) return true
        }
      }
    }
  }
  return false
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50]
    ],
    13
  )
)
