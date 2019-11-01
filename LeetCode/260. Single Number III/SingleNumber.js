/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let map = {}
  for (let num of nums) {
    if (map[num])
      delete map[num]
    else
      map[num] = true
  }
  return Object.keys(map).map(x => +x)
};

var singleNumber2 = function (nums) {
  const res = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1]) {
      res.push(nums[i])
      if (res.length === 2) return res
    } else
      i++
  }
};

var singleNumber3 = function (nums) {
  return nums.filter(x => nums.filter(y => y === x).length === 1)
};

console.log(singleNumber([-1, 0]));
console.log(singleNumber([1, 2, 1, 3, 2, 5]));