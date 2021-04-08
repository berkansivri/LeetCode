/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  const map = {}

  wall.forEach(row => {
    row.slice(0, -1).reduce((width, current) => {
      const point = width + current
      map[point] = ++map[point] || 1

      return point
    }, 0)
  })

  return wall.length - Math.max(...Object.values(map), 0)
}

console.log(leastBricks([[2], [2], [2]])) // 3

console.log(
  leastBricks([
    [6],
    [6],
    [2, 4],
    [6],
    [1, 2, 2, 1],
    [6],
    [2, 1, 2, 1],
    [1, 5],
    [4, 1, 1],
    [1, 4, 1],
    [4, 2],
    [3, 3],
    [2, 2, 2],
    [5, 1],
    [5, 1],
    [6],
    [4, 2],
    [1, 5],
    [2, 3, 1],
    [4, 2],
    [1, 1, 4],
    [1, 3, 1, 1],
    [2, 3, 1],
    [3, 3],
    [3, 1, 1, 1],
    [3, 2, 1],
    [6],
    [3, 2, 1],
    [1, 5],
    [1, 4, 1]
  ])
) // 17
console.log(leastBricks([[1, 1], [2], [1, 1]])) // 1

console.log(leastBricks([[1], [1], [1]])) // 3

console.log(
  leastBricks([
    [1, 2, 2, 1],
    [3, 1, 2],
    [1, 3, 2],
    [2, 4],
    [3, 1, 2],
    [1, 3, 1, 1]
  ])
) // 2

// [
//   [-,-],
//   [- -],
//   [-,-]
// ]
