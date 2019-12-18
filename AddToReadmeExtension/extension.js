const vscode = require('vscode')
const CreateFileAddReadMe = require('./CreateFileAddReadMe')
const pushToRepo = require('./pushToRepo')

function activate(context) {
  console.log("ACTIVATED");
  try {
    let disposableReadme = vscode.commands.registerCommand('extension.addToReadme', async () => {

      const question = await vscode.window.showInputBox({
        placeHolder: "This will be folder name",
        prompt: "Enter Question Title"
      })
      if (question.trim()) {
        const solution = await vscode.window.showInputBox({
          placeHolder: "This will be file name",
          prompt: "Enter Solution Function Name",
          value: question.split('.')[1].replace(/ /g, '')
        })
        if (solution.trim()) {
          const content = vscode.window.activeTextEditor.document.getText()
          const folder = vscode.workspace.rootPath
          try {
            await CreateFileAddReadMe(question, solution, content, folder)
            vscode.window.showInformationMessage("File Created and Added to ReadMe Table")
          } catch (error) {
            vscode.window.showWarningMessage(error.message)
          }
        }
      }
    })

    let disposableRepo = vscode.commands.registerCommand('extension.pushToRepo', async () => {
      console.log("clicked pushtorepo");
      const commitMsg = await vscode.window.showInputBox({
        prompt: "Enter Commit Msg"
      })
      if (commitMsg) {
        pushToRepo(commitMsg)
      }
    })


    context.subscriptions.push(disposableReadme, disposableRepo)
  } catch (error) {
    vscode.window.showWarningMessage(error)
  }

}
exports.activate = activate

function deactivate() {}

module.exports = {
  activate,
  deactivate
}