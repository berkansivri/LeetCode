/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let arr = path.split("/").filter(x => x)
  let res = []
  for (const item of arr) {
    if (item === "..")
      res.pop();
    else if (item === ".")
      continue;
    else
      res.push(item);
  }
  return "/" + res.join("/")
};

console.log(simplifyPath("/a//b////c/d//././/.."))