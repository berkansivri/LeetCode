/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  let group = {}
  for (let i = 0; i < paths.length; i++) {
    let path = paths[i].split(' ')
    for (let j = 1; j < path.length; j++) {
      let temp = path[j].split('(')
      if (group[temp[1]] == null) group[temp[1]] = []
      group[temp[1]].push(path[0] + '/' + temp[0])
    }
  }
  return [...Object.values(group)].filter(val => val.length > 1)
}

findDuplicate(['root/a 1.txt(abcd) 2.txt(efgh)', 'root/c 3.txt(abcd)', 'root/c/d 4.txt(efgh)', 'root 4.txt(efgh)'])
findDuplicate(['root/a 1.txt(abcd) 2.txt(efgh)', 'root/c 3.txt(abcd)', 'root/c/d 4.txt(efgh)'])
