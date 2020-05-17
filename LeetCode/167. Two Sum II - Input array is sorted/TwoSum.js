/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1
  while (numbers[left] + numbers[right] !== target) {
    if (numbers[left] + numbers[right] < target) left++
    else right--
  }
  return [++left, ++right]
}

console.log(twoSum([2, 7, 11, 15], 9))
