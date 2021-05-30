function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i
  }
  return -1
}

function binarySearch(array, value) {
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    let mid = ~~((right + left) / 2)
    if (value < array[mid]) {
      right = mid - 1
    } else if (value > array[mid]) {
      left = mid + 1
    } else {
      return mid
    }
  }

  return -1
}

binarySearch([1, 2, 3, 4, 5], 5)

// naive string search
function naiveSearch(long, short) {
  let count = 0
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) break
      if (j === short.length - 1) count++
    }
  }
  return count
}

naiveSearch('lorie loled lila lol', 'lol')
