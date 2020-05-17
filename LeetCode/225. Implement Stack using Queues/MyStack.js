/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.queue = []
}

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queue.push(x)
}

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  for (let i = 0; i < this.queue.length - 1; i++) this.queue.push(this.queue.shift())

  return this.queue.shift()
}

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  for (let i = 0; i < this.queue.length - 1; i++) this.queue.push(this.queue.shift())
  let item = this.queue.shift()
  this.queue.push(item)
  return item
}

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0
}

var obj = new MyStack()
obj.push(1)
obj.push(2)
obj.push(3)
obj.push(4)
obj.push(5)
var param_2 = obj.pop()
console.log(param_2)
var param_3 = obj.top()
var param_4 = obj.empty()
