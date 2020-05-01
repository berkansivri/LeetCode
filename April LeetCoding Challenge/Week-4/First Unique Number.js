/**
 * @param {number[]} nums
 */
var FirstUnique = function (nums) {
  this.map = new Map()
  this.memo = {}
  for (let n of nums) {
    if (!this.memo[n]) {
      if (this.map.has(n)) {
        this.map.delete(n)
        this.memo[n] = true
      } else {
        this.map.set(n)
      }
    }
  }
}

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
  return this.map.keys().next().value || -1
}

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
  if (!this.memo[value]) {
    if (this.map.has(value)) {
      this.map.delete(value)
      this.memo[value] = true
    } else {
      this.map.set(value)
    }
  }
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */

let firstUnique = new FirstUnique([2, 3, 5])
firstUnique.showFirstUnique() // return 2
firstUnique.add(5) // the queue is now [2,3,5,5]
firstUnique.showFirstUnique() // return 2
firstUnique.add(2) // the queue is now [2,3,5,5,2]
firstUnique.showFirstUnique() // return 3
firstUnique.add(3) // the queue is now [2,3,5,5,2,3]
firstUnique.showFirstUnique() // return -1

firstUnique = new FirstUnique([7, 7, 7, 7, 7, 7])
firstUnique.showFirstUnique() // return -1
firstUnique.add(7) // the queue is now [7,7,7,7,7,7,7]
firstUnique.add(3) // the queue is now [7,7,7,7,7,7,7,3]
firstUnique.add(3) // the queue is now [7,7,7,7,7,7,7,3,3]
firstUnique.add(7) // the queue is now [7,7,7,7,7,7,7,3,3,7]
firstUnique.add(17) // the queue is now [7,7,7,7,7,7,7,3,3,7,17]
firstUnique.showFirstUnique() // return 17

firstUnique = new FirstUnique([809])
firstUnique.showFirstUnique() // return 809
firstUnique.add(809) // the queue is now [809,809]
firstUnique.showFirstUnique() // return -1
