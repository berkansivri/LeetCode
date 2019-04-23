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
var swapPairs = function(head) {
  var temp = new ListNode();
  var result = temp;
  while (head) {
    if(head.next){
      var left =  Object.assign({},head.next);
      var right = Object.assign({},head);
      head = head.next.next;
      temp.next = new ListNode(left.val);
      temp.next.next = new ListNode(right.val);
      temp = temp.next.next;
    }else{
      temp.next = head;
      head = head.next;
    }
  }
  return result.next;
};