/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements2 = function (head, val) {
  let root = head,
    first = true
  while (head) {
    if (first && head.val === val) {
      head = head.next
      root = head
    } else if (head.next) {
      if (head.next.val === val) head.next = head.next.next
      else head = head.next
      first = false
    } else head = head.next
  }
  return root
};

var removeElements = function (head, val) {
  let dummy = new ListNode();
  dummy.next = head;
  let cur = dummy;

  while (cur.next) {
    if (cur.next.val == val) cur.next = cur.next.next
    else cur = cur.next;
  }
  return dummy.next;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function toListNode(arr) {
  let node = new ListNode()
  let root = node
  while (arr.length) {
    root = root.next = new ListNode()
    root.val = arr.shift()
  }
  return node.next
}

console.log(removeElements(toListNode([1, 2, 6, 3, 4, 5, 6]), 6));
console.log(removeElements(toListNode([1]), 1));
console.log(removeElements(toListNode([1, 1]), 1));