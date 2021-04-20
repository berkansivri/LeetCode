// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
  if (str.length <= 1) return str
  return reverse(str.slice(1)) + str[0]
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
  if (str.length === 1) return true
  if (str.length === 2) return str[0] === str[1]
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
  return false
}

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(nums, fn) {
  if (nums.length === 0) return false
  if (fn(nums[0])) return true
  return someRecursive(nums.slice(1), fn)
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

function flatten(nums) {
  const array = []
  for (const num of nums) {
    if (Array.isArray(num)) array.push(...flatten(num))
    else array.push(num)
  }
  return array
}
