/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  var arr = convertToArray(head);
  var reverseArr = [];
  var group = 0;
  while (arr.length - group * k >= k) {
    for (let i = 0; i < k; i++) {
      reverseArr.push(arr[group * k + i]);
    }
    arr.splice(group * k, k, ...reverseArr.reverse());
    reverseArr = [];
    group++;
  }

  var temp = new ListNode();
  var result = temp;
  for (let i = 0; i < arr.length; i++) {
    temp.next = new ListNode(arr[i]);
    temp = temp.next;
  }
  return result.next;
};

var convertToArray = function(ln) {
  var arr = [];
  while (ln && ln.val != undefined) {
    arr.push(ln.val);
    ln = ln.next;
  }
  return arr;
};
