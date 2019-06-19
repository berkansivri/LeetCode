/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var res = []
  const rec = (arr, i) => {
    if (arr.length === k) res.push([...arr])
    else {
      for (; i <= n; i++) {
        arr.push(i)
        rec(arr, i + 1)
        arr.pop()
      }
    }
  }
  rec([], 1)
  return res
}

console.log(combine(4, 2))
