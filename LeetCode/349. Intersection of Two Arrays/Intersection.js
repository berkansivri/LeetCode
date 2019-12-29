/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const nums = nums2.reduce((a, c) => ((a[c] = true), a), {})
  const intersec = nums1.reduce((a, c) => {
    if (nums[c] && !a[c])
      a[c] = true
    return a
  }, {})
  return Object.keys(intersec)
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));