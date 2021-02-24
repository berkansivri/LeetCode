/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const sorted = [...score].sort((a, b) => b - a)

  const medals = sorted.reduce((a, c, i) => {
    if (i === 0) a[c] = 'Gold Medal'
    else if (i === 1) a[c] = 'Silver Medal'
    else if (i === 2) a[c] = 'Bronze Medal'
    else a[c] = (i + 1).toString()

    return a
  }, {})

  return score.map(s => medals[s])
}

console.log(findRelativeRanks([5, 4, 3, 2, 1]))
console.log(findRelativeRanks([10, 3, 8, 9, 4]))
