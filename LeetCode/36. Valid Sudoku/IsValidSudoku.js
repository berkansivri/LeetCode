/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  var row = [], col = [], square = [];
  for (let i = 0; i < 9; i++) {
    row.push([]);
    col.push([]);
    square.push([]);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== ".") {
        if (row[i].indexOf(board[i][j]) > -1) return false;
        else row[i].push(board[i][j]);
        if (col[j].indexOf(board[i][j]) > -1) return false;
        else col[j].push(board[i][j]);
        var squareIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (square[squareIndex].indexOf(board[i][j]) > -1) return false;
        else square[squareIndex].push(board[i][j]);
      }
    }
  }
  return true;
};