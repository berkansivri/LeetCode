const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec

capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const createFile = (questionFolder, func) => {
  const folderPath = path.join(__dirname, 'LeetCode')
  fs.mkdir(path.join(folderPath, questionFolder), (err) => {
    if (err) {
      console.log(err)
      return
    }

    fs.readFile(path.join(__dirname, 'leetcode.js'), 'utf8', (err, data) => {
      if (err) {
        console.log(err)
        return
      }

      fs.writeFile(path.join(folderPath, questionFolder, capitalizeFirstLetter(func.name) + '.js'), data, (err) => {
        if (err) {
          console.log(err)
          return
        }

        console.log("File created");
        addToReadMe()
      })
    })
  })
}

const addToReadMe = () => {
  const command = "git ls-files --others --exclude-standard"
  exec(command, (err, stdout, stderr) => {
    if (err || stderr) {
      console.log(err || stderr)
      return
    }
    const pathDesc = path.parse(stdout)
    const lang = path.extname(stdout).trim()
    const folderName = pathDesc.dir.split("LeetCode/")[1]
    const fileName = pathDesc.name
    if (folderName && fileName) {
      addLine(folderName, fileName, lang)
    } else {
      console.log("No solution added");
    }
  })
}


const addLine = (problem, file, lang) => {
  let number = problem.split(". ")[0]
  let title = problem.split(". ")[1]
  let language = ""

  switch (lang) {
    case ".js":
      language = "JavaScript"
      break
    case '.cs':
      language = "C#"
    default:
      break
  }

  let content = `|${number}|[${title}](https://leetcode.com/problems/${title.split(" ").join("-").toString().toLowerCase()}/)|[${language}](https://github.com/berkansivri/LeetCode/blob/master/LeetCode/${number}.%20${title.split(" ").join("%20").toString()}/${file}.js)|`

  fs.open('README.md', 'a', 666, function (e, id) {
    fs.write(id, content + "\r\n", null, 'utf8', function () {
      fs.close(id, function () {
        console.log('readme updated')
      })
    })
  })
}

module.exports = createFile
