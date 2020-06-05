/**
 * @param {number[]} w
 */
var Solution = function (w) {
  this.sum = 0
  this.map = {}
  for (let i = 0; i < w.length; i++) {
    this.sum += w[i]
    this.map[this.sum] = i
  }
  this.keys = Object.keys(this.map)
}

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const r = ~~(Math.random() * this.sum)
  for (const key of this.keys) {
    if (r < key) return this.map[key]
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

let a = new Solution([1, 3])
a.pickIndex()
a.pickIndex()
a.pickIndex()
a.pickIndex()
a.pickIndex()
