var StockSpanner = function () {
  this.stack = []
}

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let res = 1
  while (this.stack.length && this.stack[this.stack.length - 1][0] <= price) {
    res += this.stack.pop()[1]
  }
  this.stack.push([price, res])
  return res
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

// [100, 90, 60, 70, 60, 75, 85]
let s = new StockSpanner()
s.next(100) //1
s.next(90) //1
s.next(60) //1
s.next(70) //2
s.next(60) //1
s.next(75) //4
s.next(85) //6
