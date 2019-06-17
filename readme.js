const fs = require('fs');

var addLine = function (problem, file) {
  let number = problem.split(". ")[0];
  let title = problem.split(". ")[1];
  let content = `|${number}|[${title}](https://leetcode.com/problems/${title.split(" ").join("-").toString().toLowerCase()}/)|[javascript](https://github.com/berkansivri/LeetCode/blob/master/LeetCode/${number}.%20${title.split(" ").join("%20").toString()}/${file}.js)|`

  fs.open('README.md', 'a', 666, function (e, id) {
    fs.write(id, content + "\r\n", null, 'utf8', function () {
      fs.close(id, function () {
        console.log('readme updated');
      });
    });
  });
}

addLine("71. Simplify Path", "SimplifyPath")