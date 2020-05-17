/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => b - a)
  for (let [index, value] of citations.entries()) {
    if (value < index + 1) return index
  }
  return citations.length
}

console.log(hIndex([3, 0, 6, 1, 5]))
