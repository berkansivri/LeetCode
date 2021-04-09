/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  const stack = nums.flat()
  if (stack.length !== r * c) return nums

  const matrix = []
  for (let i = 0; i < r; i++) {
    matrix.push(stack.splice(0, c))
  }

  return matrix
}

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4]
    ],
    1,
    4
  )
)

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4]
    ],
    2,
    4
  )
)
