/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  const indexes = []
  const nums = []
  nums2.forEach((n, i) => {
    indexes[n] = i
    nums[i] = n
  })

  const result = []
  for (const n of nums1) {
    let index = indexes[n]
    while (nums[++index] <= n) {}
    result.push(nums[index] || -1)
  }

  return result
}

var nextGreaterElement2 = function (nums1, nums2) {
  const indexes = nums2.reduce((a, c, i) => ((a[c] = i), a), {})

  const result = []
  for (const n of nums1) {
    const nextBig = nums2.slice(indexes[n] + 1).find(x => x > n)
    result.push(nextBig || -1)
  }

  return result
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]))
