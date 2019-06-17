/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let m = matrix.length, n = matrix[0].length, zeroIndexes = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        zeroIndexes.push([i, j])
      }
    }
  }
  for (let zr of zeroIndexes) {
    for (let i = 0; i < n; i++) {
      matrix[zr[0]][i] = 0
    }
    for (let i = 0; i < m; i++) {
      matrix[i][zr[1]] = 0
    }
  }
  return matrix
};

console.log(setZeroes([
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]))