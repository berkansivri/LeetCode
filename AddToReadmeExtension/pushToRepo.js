const exec = require('child_process').exec
const { window } = require('vscode')

const pushToRepo = msg => {
  exec('git add .', (err, stdout, stderr) => {
    if (err || stderr) {
      console.log(err || stderr)
      window.showErrorMessage(err || stderr)
      return
    }
    exec(`git commit -am ${msg}`, (err, stdout, stderr) => {
      if (err || stderr) {
        console.log(err || stderr)
        window.showErrorMessage(err || stderr)
        return
      }
      exec('git push', (err, stdout, stderr) => {
        if (err || stderr) {
          console.log(err || stderr)
          window.showErrorMessage(err || stderr)
          return
        }
        window.showInformationMessage('Pushed to repository')
      })
    })
  })
}

module.exports = pushToRepo
