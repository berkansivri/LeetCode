/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.list = head
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let c = this.list
  let rnd = c.val
  for (let i = 1; c.next != null; i++) {
    c = c.next
    if (~~(Math.random() * (i+1)) === i) rnd = c.val
  }
  return rnd
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */

function ListNode(val) {
  this.val = val;
  this.next = null;  
}

// Init a singly linked list [1,2,3].
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
let solution = new Solution(head);