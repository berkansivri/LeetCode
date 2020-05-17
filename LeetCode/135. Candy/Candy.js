/**
 * @param {number[]} ratings
 * @return {number}
 */

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let total = ratings.length,
    arr = new Array(ratings.length).fill(1)
  for (let i = 0; i < ratings.length - 1; i++) {
    if (ratings[i] < ratings[i + 1]) {
      total += arr[i] + 1 - arr[i + 1]
      arr[i + 1] = arr[i] + 1
    }
  }
  for (let i = ratings.length - 1; i > 0; i--) {
    if (ratings[i] < ratings[i - 1]) {
      if (arr[i - 1] <= arr[i]) {
        total += arr[i] + 1 - arr[i - 1]
        arr[i - 1] = arr[i] + 1
      }
    }
  }
  return total
}

var candy2 = function (ratings) {
  let arr = new Array(ratings.length).fill(1)
  for (let i = 0; i < ratings.length - 1; i++) {
    let j = i
    while (ratings[j] > ratings[j + 1]) {
      if (arr[j] <= arr[j + 1]) arr[j]++
      j--
    }
    if (ratings[i] < ratings[i + 1]) {
      arr[i + 1] = arr[i] + 1
    }
  }
  return arr.reduce((a, c) => a + c)
}

console.log(candy([1, 2, 87, 87, 87, 2, 1]))
console.log(candy([1, 2, 3, 1, 0]))
console.log(candy([1, 3, 4, 5, 2]))
console.log(candy([1, 2, 2]))

// [1,0,2]
// 2,1,2

// [1,2,2]
// 1,2,1
