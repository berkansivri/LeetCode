/**
 * @param {number[]} stones
 * @return {boolean}
 */

function canCross(stones) {
  let dp = [[0]]

  for (let i = 1; i < stones.length; i++) {
    dp[i] = []
    for (let j = 0; j < i; j++) {
      for (let step of dp[j]) {
        if (Math.abs(stones[j] + step - stones[i]) <= 1) {
          dp[i].push(stones[i] - stones[j])
          break
        }
      }
    }
  }

  return dp[stones.length - 1].length > 0
}

var canCross2 = function (stones) {
  const map = new Map()
  stones.forEach(x => map.set(x, []))
  map.get(0).push(1)

  for (let stone of stones) {
    for (let step of map.get(stone)) {
      let reach = step + stone
      if (reach === stones.slice(-1)[0]) return true
      const arr = map.get(reach)
      if (arr) {
        arr.push(step, step + 1)
        if (step > 1) arr.push(step - 1)
      }
    }
  }
  return false
}

console.log(canCross([0, 1, 3, 5, 6, 8, 12, 17]))
console.log(canCross([0, 1, 2, 3, 4, 8, 9, 11]))
