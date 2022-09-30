const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let disposable = vscode.languages.registerCompletionItemProvider('markdown', {
		provideCompletionItems(document, position, token, context) {
			if (document.getText(new vscode.Range(position.translate(0, -1), position)) === 'H') {
				let completionItem = new vscode.CompletionItem('ello World');
				completionItem.insertText = 'ello World';
				completionItem.range = new vscode.Range(position, position);
				return [completionItem];
			  }
		}
	});
	context.subscriptions.push(disposable);
}
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
