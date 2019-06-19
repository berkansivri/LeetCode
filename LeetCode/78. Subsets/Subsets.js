/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets2 = function(nums) {
  let res = [], len = nums.length
  const rec = (arr, l, i) => {
    if (arr.length === l) res.push([...arr])
    else {
      for (; i < len; i++) {
        arr.push(nums[i])
        rec(arr, l, i + 1)
        arr.pop()
      }
    }
  }
  for (let i = 0; i <= len; i++) {
    rec([], i, 0)
  }
  return res
}

//Better from discuss
function subsets(nums) {
	const powerset = [];
	generatePowerset([], 0);

	function generatePowerset(path, index) {
		powerset.push(path);
		for (let i = index; i < nums.length; i++) {
			generatePowerset([...path, nums[i]], i + 1);
		}
	}

	return powerset;
}

console.log(subsets([1, 2, 3]))
console.log(subsets2([1, 2, 3]))
