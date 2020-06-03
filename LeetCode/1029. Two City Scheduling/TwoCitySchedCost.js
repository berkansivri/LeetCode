/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function (costs) {
  let res = 0
  const indexes = costs
    .map(([a, b], i) => [i, Math.abs(a - b)])
    .sort((a, b) => b[1] - a[1])
    .map(x => x[0])

  let aCount = costs.length / 2,
    bCount = costs.length / 2
  for (let i of indexes) {
    const [a, b] = costs[i]
    if (a < b) {
      res += aCount > 0 ? a : b
      aCount--
    } else {
      res += bCount > 0 ? b : a
      bCount--
    }
  }
  return res
}

console.log(
  twoCitySchedCost([
    [10, 20],
    [30, 200],
    [400, 50],
    [30, 20]
  ])
)
console.log(
  twoCitySchedCost([
    [259, 770],
    [448, 54],
    [926, 667],
    [184, 139],
    [840, 118],
    [577, 469]
  ])
)
