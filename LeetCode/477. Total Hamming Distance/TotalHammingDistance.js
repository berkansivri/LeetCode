/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
  let total = 0

  for (let i = 0; i < 32; i++) {
    let mask = 1 << i
    let ones = 0
    let zeroes = 0

    for (const num of nums) {
      if ((num & mask) !== 0) ones++
      else zeroes++
    }
    total += ones * zeroes
  }

  return total
}

console.log(totalHammingDistance([4, 14, 2]))
