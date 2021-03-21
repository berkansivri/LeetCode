/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (M) {
  const seen = new Set()
  let res = 0

  const dfs = i => {
    for (let j = 0; j < M.length; j++) {
      if (M[i][j] === 1 && !seen.has(j)) {
        seen.add(j)
        dfs(j)
      }
    }
  }

  for (let i = 0; i < M.length; i++) {
    if (!seen.has(i)) {
      dfs(i)
      res++
    }
  }

  return res
}

console.log(
  findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
  ])
)

console.log(
  findCircleNum([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ])
)
