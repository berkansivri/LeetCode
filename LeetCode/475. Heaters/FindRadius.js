/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {
  houses.sort((a, b) => a - b)
  heaters.sort((a, b) => a - b)
  let i = 0,
    res = 0

  for (const house of houses) {
    while (i < heaters.length - 1 && heaters[i] + heaters[i + 1] <= house * 2) {
      i++
    }
    res = Math.max(res, Math.abs(heaters[i] - house))
  }
  return res
}

console.log(findRadius([1, 2, 3], [2]))
console.log(findRadius([1, 2, 3, 4], [1, 4]))
console.log(
  findRadius(
    [282475249, 622650073, 984943658, 144108930, 470211272, 101027544, 457850878, 458777923],
    [823564440, 115438165, 784484492, 74243042, 114807987, 137522503, 441282327, 16531729, 823378840, 143542612]
  )
)
console.log(findRadius([1, 5], [2]))
