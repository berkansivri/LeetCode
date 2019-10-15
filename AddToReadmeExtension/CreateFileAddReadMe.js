const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec

capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createFile = async (question, solution, fileContent, rootFolder) => {
  const folderPath = path.join(rootFolder, 'LeetCode')
  fs.mkdir(path.join(folderPath, question), (err) => {
    if (err) {
      throw new Error(err)
    }

    fs.writeFile(path.join(folderPath, question, capitalizeFirstLetter(solution) + '.js'), fileContent, (err) => {
      if (err) {
        throw new Error(err)
      }
      addToReadMe(rootFolder, question, solution, ".js")
    })
  })
}


const addToReadMe = (rootFolder, problem, solution, lang) => {
  let number = problem.split(". ")[0]
  let title = problem.split(". ")[1]
  let language = ""

  switch (lang) {
    case ".js":
      language = "JavaScript"
      break
    case '.cs':
      language = "C#"
      break;
    default: language = "JavaScript"
      break
  }

  let content = `|${number}|[${title}](https://leetcode.com/problems/${title.split(" ").join("-").toString().toLowerCase()}/)|[${language}](https://github.com/berkansivri/LeetCode/blob/master/LeetCode/${number}.%20${title.split(" ").join("%20").toString()}/${solution}.js)|`

  const readmePath = path.join(rootFolder, "README.md")
  fs.open(readmePath, 'a', 666, function (e, id) {
    fs.write(id, content + "\r\n", null, 'utf8', function () {
      fs.close(id, function () {
        console.log('readme updated')
      })
    })
  })
}

module.exports = createFile
