/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  let rows = dungeon.length,
    cols = dungeon[0].length,
    health = Array.from(Array(rows), () => new Array(cols))
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 0; j--) {
      if (i === rows - 1 && j === cols - 1)
        health[i][j] = Math.max(1, 1 - dungeon[i][j])
      else if (i === rows - 1)
        health[i][j] = Math.max(1, health[i][j + 1] - dungeon[i][j])
      else if (j === cols - 1)
        health[i][j] = Math.max(1, health[i + 1][j] - dungeon[i][j])
      else
        health[i][j] = Math.max(1, Math.min(health[i][j + 1], health[i + 1][j]) - dungeon[i][j])
    }
  }
  return health[0][0]
}

console.log(calculateMinimumHP([
  [-2, -3, 3],
  [-5, -10, 1],
  [10, 30, -5]
]));