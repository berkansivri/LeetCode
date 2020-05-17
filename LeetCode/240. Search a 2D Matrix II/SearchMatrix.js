/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix[0]) return false
  let m = 0,
    n = matrix[0].length - 1,
    len = matrix.length
  while (n > -1 && m < len) {
    if (target < matrix[m][n]) n--
    else if (target > matrix[m][n]) m++
    else return true
  }
  return false
}

console.log(searchMatrix([[-1, 3]], 3))
console.log(searchMatrix([[]], 1))
console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ],
    20
  )
)
console.log(searchMatrix([], 0))
console.log(
  searchMatrix(
    [
      [1, 4, 7, 11, 15],
      [2, 5, 8, 12, 19],
      [3, 6, 9, 16, 22],
      [10, 13, 14, 17, 24],
      [18, 21, 23, 26, 30]
    ],
    5
  )
)
