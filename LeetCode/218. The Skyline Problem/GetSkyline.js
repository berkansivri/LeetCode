/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
  if (!buildings.length) return []

  const result = []
  if (buildings.length === 1) {
    result.push([0, buildings[0][2]], [buildings[0][1], 0])
  } else {
    const arr = new Array(buildings[buildings.length - 1][1]).fill(0)

    let last = undefined
    for (let b of buildings) {
      let [left, right, height] = b
      if (last && last[2] > height && last[1] > left) left = last[1]
      arr.splice(left, right - left, ...new Array(right - left).fill(height))
      last = b
    }

    arr.reduce((p, c, i) => {
      if (p !== c) {
        result.push([i, c])
      }
      return c
    })
    if (!result.length) result.push([0, arr[0]])
    result.push([arr.length, 0])
  }
  return result
}

console.log(
  getSkyline([
    [0, 2, 3],
    [2, 5, 3]
  ])
)
console.log(getSkyline([[0, 2147483647, 2147483647]]))
console.log(getSkyline([[0, 1, 3]]))
console.log(
  getSkyline([
    [2, 9, 10],
    [3, 7, 15],
    [5, 12, 12],
    [15, 20, 10],
    [19, 24, 8]
  ])
)
