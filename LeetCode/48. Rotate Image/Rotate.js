/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */


//O(1) space
const rotate = (matrix) => {
  const len = matrix.length
  for (let i = 0; i < len / 2; i++) {
    for (let j = i; j < len - i - 1; j++) {
      [matrix[i][j], matrix[j][len - 1 - i], matrix[len - 1 - i][len - 1 - j], matrix[len - 1 - j][i]] = [matrix[len - 1 - j][i], matrix[i][j], matrix[j][len - 1 - i], matrix[len - 1 - i][len - 1 - j]]
    }
  }
}


//O(n) space
var rotate2 = function (matrix) {
  var len = matrix.length
  var temp = JSON.parse(JSON.stringify(matrix))

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      matrix[i][j] = temp[len - 1 - j][i]
    }
  }
}