/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const res = [], sorted = []
  
  const insert = (arr, num) => {
    let start = 0, end = arr.length - 1, mid, index

    if (!arr.length || arr[end] < num) {
      arr.push(num)
      return end + 1
    }

    if (arr[start] >= num) {
      arr.unshift(num)
      return 0
    }
    
    while (start + 1 < end) {
      mid = start + parseInt((end - start) / 2)
      if (arr[mid] < num) start = mid + 1
      else end = mid
    }

    index = arr[start] >= num ? start : end
    arr.splice(index, 0, num)
    return index
  }

  for (let i = nums.length - 1; i >= 0; --i) {
    res.unshift(insert(sorted, nums[i]))
  }
  return res
};

console.log(countSmaller([26,78,27,100,33,67,90,23,66,5,38,7,35,23,52,22,83,51,98,69,81,32,78,28,94,13,2,97,3,76,99,51,9,21,84,66,65,36,100,41]));
console.log(countSmaller([0, 2, 1]));
console.log(countSmaller([5, 2, 6, 1, 3]));