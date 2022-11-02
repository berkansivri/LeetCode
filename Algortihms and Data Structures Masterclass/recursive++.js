// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst(array) {
  const result = []

  const helper = arr => {
    if (arr.length === 0) return
    const str = arr[0]
    result.push(str[0].toUpperCase() + str.slice(1))
    return helper(arr.slice(1))
  }

  helper(array)
  return result
}

// var obj1 = {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }

// var obj2 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };

// nestedEvenSum(obj1); // 6
// nestedEvenSum(obj2); // 10

function nestedEvenSum(obj) {
  let total = 0

  const helper = o => {
    for (const key in o) {
      if (o[key] % 2 === 0) total += o[key]
      else if (typeof o[key] === 'object') helper(o[key])
    }
  }

  helper(obj)
  return total
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizeWords(words) {
  if (words.length === 1) return [words[0].toUpperCase()]
  let res = capitalizeWords(words.slice(0, -1))
  console.log(res)
  res.push(words.slice(words.length - 1)[0].toUpperCase())
  return res
}

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

function stringifyNumbers(obj) {
  const newObj = {}

  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString()
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key])
    } else {
      newObj[key] = obj[key]
    }
  }

  return newObj
}

// const obj = {
//   stuff: 'foo',
//   data: {
//     val: {
//       thing: {
//         info: 'bar',
//         moreInfo: {
//           evenMoreInfo: {
//             weMadeIt: 'baz'
//           }
//         }
//       }
//     }
//   }
// }

// collectStrings(obj) // ["foo", "bar", "baz"])

function collectStrings(obj) {
  const array = []
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      array.push(obj[key])
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      array.push(...collectStrings(obj[key]))
    }
  }
  return array
}
