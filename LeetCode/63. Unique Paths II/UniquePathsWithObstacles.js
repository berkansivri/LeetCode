/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  var m = obstacleGrid.length
  var n = obstacleGrid[0].length
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        if (obstacleGrid[i][j] === 1) return 
        else obstacleGrid[i][j] = 1
      } else if (i === 0) {
        if (obstacleGrid[i][j] === 0) {
          obstacleGrid[i][j] = obstacleGrid[i][j - 1]
        } else {
          obstacleGrid[i][j] = 0
        }
      } else if (j === 0) {
        if (obstacleGrid[i][j] === 0) {
          obstacleGrid[i][j] = obstacleGrid[i - 1][j]
        } else {
          obstacleGrid[i][j] = 0
        }
      } else {
        if (obstacleGrid[i][j] !== 1)
          obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
        else
          obstacleGrid[i][j] = 0
      }
    }
  }
  return obstacleGrid[m - 1][n - 1]
};

console.log(uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
]))