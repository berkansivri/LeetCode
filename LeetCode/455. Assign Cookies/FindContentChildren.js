/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let res = 0,
    j = 0
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  for (let x of s) {
    if (x >= g[j]) {
      res++
      j++
    }
  }

  return res
}

console.log(findContentChildren([1, 2, 3], [1, 1]))
console.log(findContentChildren([1, 2], [1, 2, 3]))
