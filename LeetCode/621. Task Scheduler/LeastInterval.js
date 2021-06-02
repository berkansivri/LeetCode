/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  if (n === 0) return tasks.length

  const map = tasks.reduce((obj, c) => ((obj[c] = ++obj[c] || 1), obj), {})
  // task max frequency
  const max = Math.max(...Object.values(map))

  let count = 0 // the number of tasks with same max frequency
  for (const t in map) {
    if (map[t] === max) count++
  }

  return Math.max((max - 1) * (n + 1) + count, tasks.length)
}

console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2))
console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 0))
console.log(leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2))
