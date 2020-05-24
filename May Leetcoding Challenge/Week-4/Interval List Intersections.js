/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function (A, B) {
  let i = 0,
    j = 0,
    res = []
  while (i < A.length && j < B.length) {
    let lo = Math.max(A[i][0], B[j][0])
    let hi = Math.min(A[i][1], B[j][1])
    if (lo <= hi) {
      res.push([lo, hi])
    }
    if (A[i][1] < B[j][1]) i++
    else j++
  }
  return res
}

console.log(
  intervalIntersection(
    [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25]
    ],
    [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26]
    ]
  )
)
// [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
