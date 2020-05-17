/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  const count = Array(N + 1).fill(0)
  for (let [p, j] of trust) {
    count[p]--
    count[j]++
  }
  for (let i = 1; i <= N; i++) {
    if (count[i] === N - 1) return i
  }
  return -1
}

console.log(findJudge(1, [])) //2
console.log(findJudge(2, [[1, 2]])) //2
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3]
  ])
) //3
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1]
  ])
) //-1
console.log(
  findJudge(3, [
    [1, 2],
    [2, 3]
  ])
) //-1
console.log(
  findJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3]
  ])
) //3
