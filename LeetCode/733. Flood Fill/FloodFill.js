/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor, color = image[sr][sc]) {
  if (
    sr < 0 ||
    sr === image.length ||
    sc < 0 ||
    sc === image[0].length ||
    image[sr][sc] !== color ||
    image[sr][sc] === newColor
  ) {
    return image
  }
  image[sr][sc] = newColor
  floodFill(image, sr - 1, sc, newColor, color)
  floodFill(image, sr + 1, sc, newColor, color)
  floodFill(image, sr, sc - 1, newColor, color)
  floodFill(image, sr, sc + 1, newColor, color)

  return image
}

console.log(
  floodFill(
    [
      [0, 0, 0],
      [0, 1, 1]
    ],
    1,
    1,
    1
  )
)

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1]
    ],
    1,
    1,
    2
  )
)
// [
//  [2,2,2],
//  [2,2,0],
//  [2,0,1]
// ]
