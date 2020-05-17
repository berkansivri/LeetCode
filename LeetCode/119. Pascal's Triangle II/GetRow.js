/**
 * @param {number} numRows
 * @return {number[][]}
 */
var getRow = function (rowIndex) {
  let res = []
  for (let i = 0; i < rowIndex + 1; i++) {
    res[i] = []
    for (let j = 0; j <= i; j++) {
      res[i][j] = res[i - 1] ? (res[i - 1][j - 1] || 0) + (res[i - 1][j] || 0) : 1
    }
  }
  return res[rowIndex]
}

console.log(getRow(3))
console.log(getRow(5))
console.log(getRow(6))
