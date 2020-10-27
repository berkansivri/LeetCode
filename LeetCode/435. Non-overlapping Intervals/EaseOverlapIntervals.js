/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 0) return 0

  intervals.sort((a, b) => a[1] - b[1])

  let end = intervals[0][1]
  let count = 1

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= end) {
      end = intervals[i][1]
      count++
    }
  }
  return intervals.length - count
}

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3]
  ])
)

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2]
  ])
)

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3]
  ])
)
