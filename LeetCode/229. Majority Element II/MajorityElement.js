/**
 * @param {number[]} nums
 * @return {number[]}
 */

const majorityElement = nums =>
  Object.entries(nums.reduce((p, c) => ((p[c] = p[c] + 1 || 1), p), {})).reduce(
    (a, c) => (c[1] > nums.length / 3 && a.push(+c[0]), a),
    []
  )

console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([0, 0, 0]))
console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]))
