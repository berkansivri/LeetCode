/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        isIsland(grid, i, j)
        count++
      }
    }
  }
  return count
}

function isIsland(grid, i, j) {
  if (i < 0 || i == grid.length || j < 0 || j == grid[0].length || grid[i][j] === '0') return
  grid[i][j] = '0'
  isIsland(grid, i + 1, j)
  isIsland(grid, i - 1, j)
  isIsland(grid, i, j + 1)
  isIsland(grid, i, j - 1)
}

console.log(
  numIslands([
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
  ])
)
