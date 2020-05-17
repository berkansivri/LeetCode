/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

//O(1) space
const rotate = matrix => {
  const len = matrix.length
  for (let i = 0; i < len / 2; i++)
    for (let j = i; j < len - i - 1; j++)
      [matrix[i][j], matrix[j][len - 1 - i], matrix[len - 1 - i][len - 1 - j], matrix[len - 1 - j][i]] = [
        matrix[len - 1 - j][i],
        matrix[i][j],
        matrix[j][len - 1 - i],
        matrix[len - 1 - i][len - 1 - j]
      ]
}

//O(n) space
var rotate2 = function (matrix) {
  var len = matrix.length
  var temp = JSON.parse(JSON.stringify(matrix))

  for (let i = 0; i < len; i++) for (let j = 0; j < len; j++) matrix[i][j] = temp[len - 1 - j][i]
}

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])

rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
])

rotate([
  [1, 2],
  [3, 4]
])
