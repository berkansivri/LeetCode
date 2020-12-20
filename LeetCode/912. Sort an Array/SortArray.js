/**
 * @param {number[]} nums
 * @return {number[]}
 */

// merge sort
const sortArray = function (nums) {
  if (nums.length === 1) return nums
  const mid = nums.length / 2
  return merge(sortArray(nums.slice(0, mid)), sortArray(nums.slice(mid)))
}

const merge = (left, right) => {
  const merged = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      merged.push(left.shift())
    } else {
      merged.push(right.shift())
    }
  }
  return [...merged, ...left, ...right]
}

// hashmap sort
const sortArray2 = function (nums) {
  if (nums.length === 1) return nums

  const hashMap = {}
  let i = nums.length - 1
  let key
  while (i >= 0) {
    key = (nums[i] + 51000) * 1000
    while (hashMap.hasOwnProperty(key)) key++
    hashMap[key] = nums[i]
    i--
  }
  return Object.values(hashMap)
}

// quick sort
var sortArray3 = function (nums) {
  if (nums.length < 2) return nums
  const pivot = nums.pop()
  return [...sortArray3(nums.filter(n => n <= pivot)), pivot, ...sortArray3(nums.filter(n => n > pivot))]
}

// quick sort faster
var sortArray4 = function (nums) {
  if (nums.length < 2) return nums

  const pivot = nums.pop()
  const less = []
  const more = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      less.push(nums[i])
    } else {
      more.push(nums[i])
    }
  }
  return [...sortArray4(less), pivot, ...sortArray4(more)]
}

console.log(sortArray4([5, 1, 1, 2, 0, 0]))
