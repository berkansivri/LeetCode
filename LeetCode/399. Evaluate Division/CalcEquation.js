/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const map = new Map()

  for (let i = 0; i < equations.length; i++) {
    let a = equations[i][0],
      b = equations[i][1],
      v = values[i]

    if (!map.has(a)) map.set(a, [])
    map.get(a).push([b, v])

    if (!map.has(b)) map.set(b, [])
    map.get(b).push([a, 1 / v])
  }

  const res = []

  for (let i = 0; i < queries.length; i++) {
    const seen = new Set()
    const val = dfs(map, queries[i][0], queries[i][0], queries[i][1], 1, seen)

    res.push(val || -1)
  }
  return res
}

const dfs = (map, src, curr, dest, quotient, seen) => {
  if (!map.has(src) || !map.has(dest)) return -1
  if (src === dest) return 1

  if (curr === dest) return quotient

  seen.add(curr)
  const neighbors = map.get(curr)

  for (let i = 0; i < neighbors.length; i++) {
    if (seen.has(neighbors[i][0])) continue

    const val = dfs(map, src, neighbors[i][0], dest, quotient * neighbors[i][1], seen)
    if (val !== false) return val
  }

  return false
}

console.log(
  calcEquation(
    [
      ['a', 'b'],
      ['b', 'c']
    ],
    [2.0, 3.0],
    [
      ['a', 'c'],
      ['b', 'a'],
      ['a', 'e'],
      ['a', 'a'],
      ['x', 'x']
    ]
  )
)
