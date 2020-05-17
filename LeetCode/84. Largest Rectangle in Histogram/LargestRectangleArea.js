/**
 * @param {number[]} heights
 * @return {number}
 */

//TIME LIMIT EXCEEDED
var largestRectangleArea = function (heights) {
  let max = 0,
    len = heights.length,
    area = 0,
    min = 0,
    exMin = 0,
    i = 0

  let lines = [heights[i]]
  while (i < len) {
    min = Math.min(...lines)
    area = min * lines.length
    if (area > max) max = area
    if (lines.length > 1) {
      let temp = [...lines]
      while (temp.length > 1) {
        exMin = Math.min(...temp)
        temp.shift()
        min = Math.min(...temp)
        area = min * temp.length
        if (area > max) {
          if (area > max + exMin) lines = [...temp]
          max = area
        }
      }
    }
    i++
    lines.push(heights[i])
  }
  return max
}

console.log(largestRectangleArea([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(largestRectangleArea([0, 9]))
