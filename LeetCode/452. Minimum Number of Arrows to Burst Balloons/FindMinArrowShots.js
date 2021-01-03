/**
 * @param {number[][]} points
 * @return {number}
 */

var findMinArrowShots = function (points) {
  points.sort((a, b) => a[1] - b[1])

  let count = 0
  let ending = -Infinity
  for (let [x, y] of points) {
    if (x > ending) {
      ending = y
      count++
    }
  }

  return count
}

var findMinArrowShots2 = function (points) {
  points.sort((a, b) => a[0] - b[0] || a[1] - b[1])

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] <= points[i - 1][1]) {
      points.splice(i - 1, 2, [Math.max(points[i][0], points[i - 1][0]), Math.min(points[i - 1][1], points[i][1])])
      i--
    }
  }
  return points.length
}

console.log(
  findMinArrowShots([
    [1, 6],
    [2, 8],
    [7, 12],
    [10, 16]
  ])
)

console.log(
  findMinArrowShots([
    [3, 9],
    [7, 12],
    [3, 8],
    [6, 8],
    [9, 10],
    [2, 9],
    [0, 9],
    [3, 9],
    [0, 6],
    [2, 8]
  ])
)

console.log(
  findMinArrowShots([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
  ])
)
console.log(
  findMinArrowShots([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5]
  ])
)
console.log(
  findMinArrowShots([
    [2, 3],
    [2, 3]
  ])
)
console.log(findMinArrowShots([[1, 2]]))
