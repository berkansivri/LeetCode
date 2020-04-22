/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.mins = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  if (this.mins.length === 0)
    this.mins.push(x)
  else
    this.mins.push(Math.min(this.mins.slice(-1), x))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
  this.mins.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.slice(-1)
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.mins.slice(-1)
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */