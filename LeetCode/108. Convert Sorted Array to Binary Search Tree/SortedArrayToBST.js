/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  let len = nums.length;
  if (!len) return null
  let index = Math.floor(len / 2)
  let res = new TreeNode(nums[index])
  res.left = sortedArrayToBST(nums.slice(0, index))
  res.right = sortedArrayToBST(nums.slice(index + 1, len))
  return res
}

console.log(sortedArrayToBST([1, 2, 3]))
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
