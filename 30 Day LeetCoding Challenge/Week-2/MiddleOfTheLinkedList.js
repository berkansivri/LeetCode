/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let len = 0,
    node = head
  while (node) {
    node = node.next
    len++
  }

  node = head
  len = ~~(len / 2)
  while (len) {
    node = node.next
    len--
  }
  return node
};

console.log(middleNode(toListNode([1, 2, 3, 4, 5])));
console.log(middleNode(toListNode([1, 2, 3, 4, 5, 6])));

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function toListNode(arr) {
  let node = new ListNode()
  let head = node
  for (let v of arr) {
    node.next = new ListNode(v)
    node = node.next
  }
  return head.next
}