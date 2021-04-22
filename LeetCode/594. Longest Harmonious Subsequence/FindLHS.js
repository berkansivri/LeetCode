/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  const map = {}
  let len = 0

  for (const num of nums) {
    map[num] = ~~map[num] + 1
  }

  for (const n in map) {
    if (map[+n + 1]) {
      len = Math.max(len, map[+n + 1] + map[n])
    }
  }

  return len
}

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7])) // 4 - [3,2,2,2,3]
console.log(findLHS([1, 2, 3, 4])) // 2
console.log(findLHS([1, 1, 1, 1])) // 0
