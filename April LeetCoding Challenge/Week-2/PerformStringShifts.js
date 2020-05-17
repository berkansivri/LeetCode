/**
 * @param {string} s
 * @param {number[][]} shift
 * @return {string}
 */

// better solution
var stringShift = function (s, shift) {
  const arr = s.split('')
  let count = shift.reduce((a, [d, c]) => (d ? a - c : a + c), 0)

  if (count > 0) {
    arr.push(...arr.splice(0, count % arr.length))
  } else {
    arr.unshift(...arr.splice(count % arr.length))
  }
  return arr.join('')
}

// easy-to-understand
var stringShift2 = function (s, shift) {
  const arr = s.split('')
  for (let [d, c] of shift) {
    if (d === 0) while (c--) arr.push(arr.shift())
    else while (c--) arr.unshift(arr.pop())
  }
  return arr.join('')
}

console.log(
  stringShift('xqgwkiqpif', [
    [1, 4],
    [0, 7],
    [0, 8],
    [0, 7],
    [0, 6],
    [1, 3],
    [0, 1],
    [1, 7],
    [0, 5],
    [0, 6]
  ])
)
console.log(
  stringShift('abc', [
    [0, 1],
    [1, 2]
  ])
)
console.log(
  stringShift('abcdefg', [
    [1, 1],
    [1, 1],
    [0, 2],
    [1, 3]
  ])
)
