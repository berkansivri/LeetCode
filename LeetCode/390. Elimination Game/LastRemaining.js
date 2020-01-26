/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  let left = true, remain = n, step = 1, head = 1
  
  while(remain > 1) {
    if(left || remain % 2 === 1) {
      head += step
    }
    remain = ~~(remain / 2)
    step *= 2
    left = !left
  }
  return head
};

console.log(lastRemaining(9));
console.log(lastRemaining(24));
