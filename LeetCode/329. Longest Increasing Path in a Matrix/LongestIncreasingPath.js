/**
 * @param {number[][]} matrix
 * @return {number}
 */

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0]
]
var longestIncreasingPath = function (matrix) {
  if (matrix.length === 0) return 0
  let m = matrix.length,
    n = matrix[0].length
  let cache = Array(m).fill().map(_ => [])
  let max = 1
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let len = dfs(matrix, i, j, m, n, cache)
      max = Math.max(max, len)
    }
  }
  return max
};

const dfs = (matrix, i, j, m, n, cache) => {
  if (cache[i][j]) return cache[i][j]
  let max = 1
  for (let dir of directions) {
    let x = i + dir[0],
      y = j + dir[1]
    if (x < 0 || x >= m || y < 0 || y >= n || matrix[x][y] <= matrix[i][j]) continue
    let len = 1 + dfs(matrix, x, y, m, n, cache)
    max = Math.max(max, len)
  }
  cache[i][j] = max
  return max
}

console.log(longestIncreasingPath([
  [9, 9, 4],
  [6, 6, 8],
  [2, 1, 1]
]));