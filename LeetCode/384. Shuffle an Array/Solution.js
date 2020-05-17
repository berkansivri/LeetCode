/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums
  this.copy = [...nums]
}

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums
}

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  for (let i = this.copy.length - 1; i > 0; i--) {
    let rnd = ~~(Math.random() * (i + 1))
    ;[this.copy[i], this.copy[rnd]] = [this.copy[rnd], this.copy[i]]
  }
  return this.copy
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

// Init an array with set 1, 2, and 3.
let nums = [1, 2, 3]
let solution = new Solution(nums)

// Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
solution.shuffle()

// Resets the array back to its original configuration [1,2,3].
solution.reset()

// Returns the random shuffling of array [1,2,3].
solution.shuffle()
