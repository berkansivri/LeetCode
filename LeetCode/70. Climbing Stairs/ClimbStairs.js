/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  let curr = 1, prev = 0
  for (let i = 1; i <= n; i++)
    [curr, prev] = [prev + curr, curr]
  return curr
}
console.log(climbStairs(7))