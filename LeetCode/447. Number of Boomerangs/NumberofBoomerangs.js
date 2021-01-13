/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  let count = 0

  for (let [x1, y1] of points) {
    const memo = {}
    for (let [x2, y2] of points) {
      if (x1 === x2 && y1 === y2) continue

      const dist = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)
      if (!memo[dist]) memo[dist] = 0

      count += memo[dist] * 2
      memo[dist]++
    }
  }
  return count
}

console.log(
  numberOfBoomerangs([
    [0, 0],
    [1, 0],
    [2, 0]
  ])
)
console.log(
  numberOfBoomerangs([
    [1, 1],
    [2, 2],
    [3, 3]
  ])
)
console.log(numberOfBoomerangs([[1, 1]]))
