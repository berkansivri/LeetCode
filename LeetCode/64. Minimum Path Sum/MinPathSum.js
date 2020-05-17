/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length
  let n = grid[0].length
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (j !== n - 1 && i === m - 1) grid[i][j] += grid[i][j + 1]
      if (j === n - 1 && i !== m - 1) grid[i][j] += grid[i + 1][j]
      if (j !== n - 1 && i !== m - 1) grid[i][j] += Math.min(grid[i + 1][j], grid[i][j + 1])
    }
  }
  return grid[0][0]
}

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
  ])
)
