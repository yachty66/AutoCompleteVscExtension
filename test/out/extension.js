"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
//import { search } from './utils/search';
//import { matchSearchPhrase } from './utils/matchSearchPhrase';
let orange = vscode.window.createOutputChannel("Orange");
orange.appendLine("I am not");
function activate(_) {
    const provider = {
        // @ts-ignore
        //what is happening here 
        provideInlineCompletionItems: async (document, position, context, token) => {
            //i am getting hello world only short displayed  
            if (true) {
                //get content form whole line
                const line = document.lineAt(position.line);
                orange.appendLine("test");
                let completionItem = new vscode.CompletionItem(line.text);
                completionItem.insertText = line.text;
                completionItem.range = new vscode.Range(position, position);
                return [completionItem];
            }
            /*if (document.getText(new vscode.Range(position.translate(0, -1), position)) === 'H') {
                let completionItem = new vscode.CompletionItem('ello World');
                completionItem.insertText = 'ello World';
                completionItem.range = new vscode.Range(position.translate(0, -1), position);
                return [completionItem];
            }*/
        },
    };
    // @ts-ignore
    vscode.languages.registerInlineCompletionItemProvider({ pattern: "**" }, provider);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map