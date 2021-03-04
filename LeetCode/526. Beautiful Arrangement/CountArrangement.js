/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
  const used = [0]
  helper(n, 1, used)
  return used[0]
}

const helper = (n, pos, used) => {
  if (pos > n) {
    used[0]++
    return
  }

  for (let i = 1; i <= n; i++) {
    if (!used[i] && (i % pos === 0 || pos % i === 0)) {
      used[i] = true
      helper(n, pos + 1, used)
      used[i] = false
    }
  }
}

console.log(countArrangement(2))
console.log(countArrangement(3))
console.log(countArrangement(4))
console.log(countArrangement(5))
console.log(countArrangement(15))
