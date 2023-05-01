/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function (price, special, needs) {

  const betterSpecials = special.filter((s1) =>
    !special.some(s2 => s1.at(-1) > s2.at(-1) && s1.slice(0, -1).every((y,j) => y === s2[j]))
  )

  const check = (price, special, needs) => {
    let offer = needs.reduce((sum, n, i) => sum + n * price[i], 0)
    for (const s of special) {
      if (s.some((x, i) => x > needs[i])) continue
      offer = Math.min(offer, s.at(-1) + check(price, special, needs.map((n, i) => n - s[i])))
    }
    return offer
  }

  return check(price, betterSpecials, needs)
}

price = [2, 5], special = [[3, 0, 5], [1, 2, 10]], needs = [3, 2]
console.log(shoppingOffers(price, special, needs)) // 14

price = [2,3,4], special = [[1,1,0,4],[2,2,1,9]], needs = [1,2,1]
console.log(shoppingOffers(price, special, needs)) // 11
price =
[2,2]
special =
[[1,1,1],[1,1,2],[1,1,3],[1,1,4],[1,1,5],[1,1,6],[1,1,7],[1,1,8],[1,1,9],[1,1,10],[1,1,11],[1,1,12],[1,1,13],[1,1,14],[1,1,15]]
needs =
[10,10]
console.log(shoppingOffers(price, special, needs)) // 10