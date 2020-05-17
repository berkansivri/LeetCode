/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
  let max = 0,
    sum = 0
  for (let n of nums) {
    max = Math.max(max, n)
    sum += n
  }
  if (m === 1) return sum

  let l = max,
    r = sum
  while (l <= r) {
    let mid = ~~((l + r) / 2)
    if (valid(mid, nums, m)) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return l
}

const valid = (target, nums, m) => {
  let count = 1,
    total = 0
  for (let n of nums) {
    total += n
    if (total > target) {
      total = n
      count++
      if (count > m) return false
    }
  }
  return true
}

console.log(splitArray([7, 2, 5, 10, 8], 2))
