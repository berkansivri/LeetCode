/**
 * Initialize your data structure here.
 */
var SummaryRanges = function () {
  this.stream = []
};

/** 
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (val) {
  this.stream[val] = true
};

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
  let res = [], start = -1
  for (let i = 0; i <= this.stream.length; i++) {
    if (start == -1) {
      if (this.stream[i]) {
        start = i
        continue
      }
    } else {
      if (!this.stream[i]) {
        res.push([start, i - 1])
        start = -1
        continue
      }
    }
  }
  return res
};

/** 
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */

let a = new SummaryRanges()
a.addNum(1)
a.getIntervals()
a.addNum(3)
a.getIntervals()
a.addNum(7)
a.getIntervals()
a.addNum(2)
a.getIntervals()
a.addNum(6)
a.getIntervals()