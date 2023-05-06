/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  let [minx, miny] = [m, n]
  for (const op of ops) {
    minx = Math.min(op[0], minx)
    miny = Math.min(op[1], miny)
  }

  return minx * miny
}

console.log(
  maxCount(3, 3, [
    [2, 2],
    [3, 3]
  ])
) // 4
console.log(
  maxCount(3, 3, [
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3],
    [2, 2],
    [3, 3],
    [3, 3],
    [3, 3]
  ])
) // 4
