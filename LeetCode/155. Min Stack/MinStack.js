/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [], this.min = Number.MAX_SAFE_INTEGER
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (x <= this.min) {
    this.stack[this.stack.length] = this.min;
    this.min = x
  }
  this.stack[this.stack.length] = x
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let val = this.stack[this.stack.length - 1]
  if (val === this.min) {
    this.min = this.stack[this.stack.length - 2]
    this.stack.length = this.stack.length - 2
  } else {
    this.stack.length = this.stack.length - 1
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


let minStack = new MinStack();
minStack.getMin();
minStack.push(0);
minStack.push(1);
minStack.push(0);
minStack.getMin();
minStack.pop();
minStack.getMin();