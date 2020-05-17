/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  const len = nums.length
  nums.sort((a, b) => a - b)
  const mid = len % 2 === 0 ? len / 2 : Math.floor(len / 2) + 1
  const small = nums.slice(0, mid)
  const big = nums.slice(mid, len)
  for (let i = 0; i < len; i++) {
    if (i % 2 === 0) {
      nums[i] = small.pop()
    } else {
      nums[i] = big.pop()
    }
  }
}

console.log(wiggleSort([1, 2, 2, 1, 2, 1, 1, 1, 1, 2, 2, 2]))
console.log(wiggleSort([1, 5, 1, 1, 6, 4]))
console.log(wiggleSort([1, 3, 2, 2, 3, 1]))
