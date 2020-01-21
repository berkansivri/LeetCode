/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let m = board.length
  if (m === 0) return 0
  let n = board[0].length,
    count = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === '.') continue
      if (i > 0 && board[i - 1][j] === 'X') continue
      if (j > 0 && board[i][j - 1] === 'X') continue
      count++
    }
  }
  return count
};

console.log(countBattleships([
  ["X", ".", ".", "X"],
  ["X", ".", ".", "X"],
  ["X", ".", ".", "X"]
]));
