/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.arr = []
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let len = this.arr.length
  if (len === 0 || this.arr[len - 1] <= num) this.arr.push(num)
  else if (this.arr[0] >= num) this.arr.unshift(num)
  else
    this.arr.splice(
      this.arr.findIndex(x => x > num),
      0,
      num
    )
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let len = this.arr.length
  const mid = Math.floor(len / 2)
  return len % 2 === 0 ? (this.arr[mid - 1] + this.arr[mid]) / 2 : this.arr[mid]
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// addNum(1)
// addNum(2)
// findMedian() -> 1.5
// addNum(3)
// findMedian() -> 2
