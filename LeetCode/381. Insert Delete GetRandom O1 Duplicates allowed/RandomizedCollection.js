/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function () {
  this.set = {}
  this.vals = []
}

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function (val) {
  this.vals.push(val)
  if (val in this.set) {
    this.set[val].push(this.vals.length - 1)
    return this.set[val].length === 1
  } else {
    this.set[val] = [this.vals.length - 1]
    return true
  }
}

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function (val) {
  if (val in this.set) {
    let index = this.set[val].slice(-1)[0]
    let last = this.vals[this.vals.length - 1]
    this.vals[index] = last
    this.set[last].splice(this.set[last].length - 1, 1, index)
    this.set[last].sort()
    this.vals.pop()
    this.set[val].pop()
    if (this.set[val].length === 0) delete this.set[val]
    return true
  } else return false
}

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function () {
  return this.vals[~~(Math.random() * this.vals.length)]
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// Init an empty collection.
let collection = new RandomizedCollection()

// Inserts 1 to the collection. Returns true as the collection did not contain 1.
collection.insert(1)

// Inserts another 1 to the collection. Returns false as the collection contained 1. Collection now contains [1,1].
collection.insert(1)

// Inserts 2 to the collection, returns true. Collection now contains [1,1,2].
collection.insert(2)
collection.insert(1)
collection.insert(2)
collection.insert(2)
collection.remove(1)
collection.remove(2)
collection.remove(2)
collection.remove(2)

// getRandom should return 1 with the probability 2/3, and returns 2 with the probability 1/3.
collection.getRandom()
collection.getRandom()
collection.getRandom()
collection.getRandom()
collection.getRandom()
collection.getRandom()
collection.getRandom()
collection.getRandom()
collection.getRandom()
collection.getRandom()

// [null,true,false,true,false,false,false,true,true,true,true,1,1,1,1,1,1,1,1,1,1]
