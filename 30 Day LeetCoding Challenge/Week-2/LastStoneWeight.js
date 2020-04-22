/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b)
    stones.push(stones.pop() - stones.pop())
  }
  return stones[0]
}

console.log(lastStoneWeight([434, 667, 378, 919, 212, 902, 240, 257, 208, 996, 411, 222, 557, 634, 425, 949, 755, 833, 785, 886, 40, 159, 932, 157, 764, 916, 85, 300, 130, 278]))
console.log(lastStoneWeight([3, 7, 8]))
console.log(lastStoneWeight([2, 2]))
console.log(lastStoneWeight([1, 3]))
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]))
