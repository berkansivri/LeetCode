/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const nums = nums2.reduce((a, c) => ((a[c] = (a[c] || 0) + 1), a), {})

  return nums1.reduce((a, c) => {
    if (nums[c]) {
      a.push(c)
      nums[c]--
    }
    return a
  }, [])
}

console.log(intersect([1, 2, 2, 1], [2]))
console.log(intersect([1, 2, 2, 1], [2, 2]))
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
