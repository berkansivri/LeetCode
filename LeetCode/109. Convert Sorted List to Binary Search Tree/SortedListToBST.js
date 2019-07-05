/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  let arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  const iter = nums => {
    let len = nums.length
    if (!len) return null
    let index = Math.floor(len / 2)
    let res = new TreeNode(nums[index])
    res.left = iter(nums.slice(0, index))
    res.right = iter(nums.slice(index + 1, len))
    return res
  }
  return iter(arr)
}

let a = new ListNode(-10)
a.next = new ListNode(-3)
a.next.next = new ListNode(0)
a.next.next.next = new ListNode(5)
a.next.next.next.next = new ListNode(9)

console.log(sortedListToBST(a))

function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

function ListNode(val) {
  this.val = val
  this.next = null
}
