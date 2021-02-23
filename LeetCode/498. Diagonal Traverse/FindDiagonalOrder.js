/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  if (matrix.length === 0) return []

  let rows = matrix.length
  let cols = matrix[0].length
  const result = new Array(rows + cols - 1).fill(null).map(() => [])

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[i + j].push(matrix[i][j])
    }
  }

  for (let i = 0; i < result.length; i += 2) {
    result[i] = result[i].reverse()
  }

  return result.flat()
}

console.log(
  findDiagonalOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
)
console.log(
  findDiagonalOrder([
    [1, 2, 3, 11],
    [4, 5, 6, 12],
    [7, 8, 9, 13],
    [5, 5, 5, 14]
  ])
)
console.log(findDiagonalOrder([[]]))
console.log(findDiagonalOrder([]))

// 0 0
// 0 1 > 1 0
// 2 0 > 0 2
// 1 2 > 2 1
// 2 2
