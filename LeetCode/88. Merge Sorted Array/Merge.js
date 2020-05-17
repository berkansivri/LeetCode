/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, nums1.length, ...nums2.splice(0, n))
  nums1.sort((a, b) => a - b)
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
