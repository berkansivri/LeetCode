/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  let map = nums.map((val, index) => ({ index, val })).sort((a, b) => a.val - b.val)
  let l = 0, r = 1
  while (r < map.length) {
    if (l === r) r++
    else {
      let valDiff = Math.abs(map[l].val - map[r].val)
      let indexDiff = Math.abs(map[l].index - map[r].index)

      if (valDiff <= t && indexDiff <= k) return true
      else if (valDiff > t) l++
      else if (indexDiff > k) r++
    }
  }
  return false
};

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0));
console.log(containsNearbyAlmostDuplicate([3, 6, 0, 4], 2, 2));
console.log(containsNearbyAlmostDuplicate([4, 2], 2, 1));
console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2));
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3));

var containsNearbyAlmostDuplicate2 = function (nums, k, t) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j <= k; j++) {
      if (Math.abs(nums[j + i] - nums[i]) <= t) return true
    }
  }
  return false
};

console.log(containsNearbyAlmostDuplicate2([3, 6, 0, 4], 2, 2));
console.log(containsNearbyAlmostDuplicate2([4, 2], 2, 1));
console.log(containsNearbyAlmostDuplicate2([1, 2, 3, 1], 3, 0));
console.log(containsNearbyAlmostDuplicate2([1, 0, 1, 1], 1, 2));
console.log(containsNearbyAlmostDuplicate2([1, 5, 9, 1, 5, 9], 2, 3));
