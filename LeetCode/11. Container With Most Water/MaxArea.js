/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  var max = 0
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      var min = height[i] < height[j] ? height[i] : height[j]
      if (min * (j - i) > max) {
        max = min * (j - i)
      }
    }
  }
  return max
}
