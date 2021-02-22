/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  if (timeSeries.length === 0) return 0

  let total = duration,
    lastSec = timeSeries[0] + duration

  for (const t of timeSeries.slice(1)) {
    if (lastSec > t) total -= lastSec - t
    lastSec = t + duration
    total += duration
  }

  return total
}

console.log(findPoisonedDuration([], 2))
console.log(findPoisonedDuration([1, 4], 2))
console.log(findPoisonedDuration([1, 2], 2))
console.log(findPoisonedDuration([1, 2, 3, 4, 5, 6, 7, 8, 9], 0))
