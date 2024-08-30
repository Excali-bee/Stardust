import vscode from 'vscode';

/**
 * @param {vscode.ExtensionContext} context
 */
function activate() {
	console.log('Congratulations, Stardust" is now active!');

	context.subscriptions.push(disposable);
}

function deactivate() { }

module.exports = {
	activate,
	deactivate
}
