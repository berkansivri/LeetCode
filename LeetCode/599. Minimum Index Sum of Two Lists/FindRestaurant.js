/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const map1 = getMap(list1)
  const map2 = getMap(list2)
  let leastIndex = Infinity
  let result = []

  for (const item in map1) {
    const totalIndex = map1[item] + map2[item]
    if (totalIndex < leastIndex) {
      leastIndex = totalIndex
      result = [item]
    } else if (totalIndex === leastIndex) {
      result.push(item)
    }
  }

  return result
}

function getMap(list) {
  return list.reduce((obj, item, index) => ((obj[item] = index), obj), {})
}

console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['KNN', 'KFC', 'Burger King', 'Tapioca Express', 'Shogun']
  )
)
console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun']
  )
)

console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['KFC', 'Burger King', 'Tapioca Express', 'Shogun']
  )
)

console.log(findRestaurant(['Shogun', 'Tapioca Express', 'Burger King', 'KFC'], ['KFC', 'Shogun', 'Burger King']))

console.log(findRestaurant(['KFC'], ['KFC']))
