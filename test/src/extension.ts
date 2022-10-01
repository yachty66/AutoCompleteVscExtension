import * as vscode from 'vscode';

//import { search } from './utils/search';
//import { matchSearchPhrase } from './utils/matchSearchPhrase';
let orange = vscode.window.createOutputChannel("Orange");
orange.appendLine("I am not");


export function activate(_: vscode.ExtensionContext) {

    const provider: vscode.CompletionItemProvider = {
        // @ts-ignore
        //what is happening here 
        provideInlineCompletionItems: async (document, position, context, token) => {
            //i am getting hello world only short displayed  
            orange.appendLine("I am a banana.");
            if (document.getText(new vscode.Range(position.translate(0, -1), position)) === 'H') {
                let completionItem = new vscode.CompletionItem('ello World');
                completionItem.insertText = 'ello World';
                completionItem.range = new vscode.Range(position.translate(0, -1), position);
                return [completionItem];
            }
        },
    };

    // @ts-ignore
    vscode.languages.registerInlineCompletionItemProvider({pattern: "**"}, provider);
}