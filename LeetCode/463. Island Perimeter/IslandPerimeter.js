/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let result = 0

  if (!grid.length) return

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j]) {
        result += 4

        if (i > 0 && grid[i - 1][j]) result -= 2
        if (j > 0 && grid[i][j - 1]) result -= 2
      }
    }
  }

  return result
}

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
  ])
)
console.log(islandPerimeter([[1]]))
console.log(islandPerimeter([[1, 0]]))
