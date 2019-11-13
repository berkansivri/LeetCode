/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  let m = board.length,
    n = board[0].length
  const arr = board.map(x => x.slice())
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const liveCount = checkNeighbors(arr, m, n, i, j)
      if (liveCount === 3) board[i][j] = 1
      else if (board[i][j] === 1 && liveCount === 2) board[i][j] = 1
      else if (liveCount < 2 || liveCount > 3) board[i][j] = 0
    }
  }
  return board
};

const checkNeighbors = (arr, m, n, i, j) => {
  let c = 0
  for (let x = Math.max(i - 1, 0); x <= Math.min(i + 1, m - 1); x++) {
    for (let y = Math.max(j - 1, 0); y <= Math.min(j + 1, n - 1); y++) {
      c += arr[x][y] & 1
    }
  }
  c -= arr[i][j] & 1
  return c
}

console.log(gameOfLife([
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
]));