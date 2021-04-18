/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
  const dist = (a, b) => {
    return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2
  }

  const distances = [dist(p1, p2), dist(p1, p3), dist(p1, p4), dist(p2, p3), dist(p2, p4), dist(p3, p4)]
  let result = [...new Set(distances)].sort((a, b) => a - b)

  return result.length === 2 && result[0] * 2 === result[1]
}

console.log(validSquare([0, 0], [1, 1], [1, 0], [0, 1]))
console.log(validSquare([0, 0], [1, 1], [1, 0], [0, 12]))
console.log(validSquare([1, 0], [-1, 0], [0, 1], [0, -1]))
