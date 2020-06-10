/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0,
    end = nums.length - 1,
    mid = ~~((start + end) / 2)

  while (start < end) {
    if (nums[mid] > target) end = mid
    else if (nums[mid] < target) start = mid + 1
    else return mid
    mid = ~~((start + end) / 2)
  }

  if (nums[mid] >= target) return mid
  else return mid + 1
}

console.log(searchInsert([1, 3, 5, 6], 2)) //1
console.log(searchInsert([1, 3, 5, 6], 5)) //2
console.log(searchInsert([1, 3, 5, 6], 7)) // 4
console.log(searchInsert([1, 3, 5, 6], 0)) // 0
