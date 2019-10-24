/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  return nums.reduce((res, c, j, arr) => {
    let temp = arr[j]
    arr[j] = 1
    res.push(arr.reduce((p, n) => ((p *= n), p), 1))
    arr[j] = temp
    return res
  }, [])
  // one liner
  // return nums.map((n, i) => nums.reduce((p, c, j) => (i !== j && (p *= c), p), 1))
};

console.log(productExceptSelf([1, 2, 3, 4]));