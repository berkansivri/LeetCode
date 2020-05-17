// sorted merge in-place

const merge = (a, b) => {
  let m = a.length - 1

  for (let i = m; i >= 0; i--) {
    if (b.length) {
      let n = a.length - 1
      while (b[0] < a[n]) n--
      a.splice(n + 1, 0, b.shift())
      i++
    }

    let k = i
    while (a[k] < a[k - 1]) {
      ;[a[k], a[k - 1]] = [a[k - 1], a[k]]

      let l = k
      while (a[l] > a[l + 1]) {
        ;[a[l], a[l + 1]] = [a[l + 1], a[l]]
        l++
      }

      k--
    }
  }

  return a
}

let a = [11, 12, 5, 8, 12, 2, 10]
let b = [3, 2, 7, 8, 13]

merge(a, b)
// 2,2,3,5,7,8,8,10,11,12,13

const randomTest = len => {
  console.time('test duration')
  let anyFail = false
  for (let i = 0; i < len; i++) {
    let a = Array(Math.round(Math.random() * 10))
      .fill()
      .map(() => Math.round(Math.random() * 100))
    let b = Array(Math.round(Math.random() * 10))
      .fill()
      .map(() => Math.round(Math.random() * 100))

    merge(a, b)
    let res = a.every((v, i) => !i || a[i - 1] <= v) //check if sorted
    if (!res) {
      anyFail = true
      break
    }
  }

  if (anyFail) {
    console.log('FAILED')
  } else {
    console.timeEnd('test duration')
    console.log(`Success with ${len} try.`)
  }
}

// Test with 1 million random length of arrays (up to 10) filled with random values (up to 100).
randomTest(1000000)
