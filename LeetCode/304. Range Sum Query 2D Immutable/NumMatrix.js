/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.matrix = matrix
  this.rowLen = matrix.length
  this.colLen = this.rowLen > 0 ? matrix[0].length : 0
}

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let sum = 0
  for (let i = Math.min(row1, this.rowLen - 1); i <= Math.min(row2, this.rowLen - 1); i++) {
    for (let j = Math.min(col1, this.colLen - 1); j <= Math.min(col2, this.colLen - 1); j++) {
      sum += this.matrix[i][j]
    }
  }
  return sum
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

// let temp = new NumMatrix([
//   [3, 0, 1, 4, 2],
//   [5, 6, 3, 2, 1],
//   [1, 2, 0, 1, 5],
//   [4, 1, 0, 1, 7],
//   [1, 0, 3, 0, 5]
// ]);
let temp = new NumMatrix([[-4, -5]])
temp.sumRegion(0, 0, 0, 1)
temp.sumRegion(3, 3, 4, 4)
temp.sumRegion(2, 1, 4, 3)
