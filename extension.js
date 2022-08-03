// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode')

// const languageId = 'jet'

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "Hello World!" is now active!')

    // This must match the command property in the package.json
    const commandID = "jet.helloWorld"

    const disposable = vscode.commands.registerCommand(commandID, sayHello)
    context.subscriptions.push(disposable)
}

// const jetFormatProvider = {
//     provideDocumentFormattingEdits(model, options, token) {
//         return [{
//             text: YourFormatter(model.getValue()) // put formatted text here
//             range: model.getFullModelRange()
//         }];
//     }
// };
// jet.languages.registerDocumentFormattingEditProvider(languageId, htmlFormatProvider)

function sayHello() {
    vscode.window.showInformationMessage("Hello World!")
}

// this method is called when your extension is deactivated
function deactivate() { }

// eslint-disable-next-line no-undef
module.exports = {
    activate,
    deactivate
}
