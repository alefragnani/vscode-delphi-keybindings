/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { selectWordAtCursorPosition } from "vscode-ext-selection";
import { registerWhatsNew } from "./whats-new/commands";
import { Container } from './container';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    Container.context = context;

    registerWhatsNew();

    const disposableSelectWord = vscode.commands.registerCommand('delphiKeybindings.selectWord', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
          vscode.window.showInformationMessage("Open a file first to select word");
          return;
        }
        const selection = editor.selection;
        if (selection.isEmpty) {
            selectWordAtCursorPosition(editor);
        }

    });
    context.subscriptions.push(disposableSelectWord);

    const disposableHelp = vscode.commands.registerCommand('delphiKeybindings.help', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage("Open a file first to locate help in DocWiki");
            return;
          }
        const selection = editor.selection;
        if (selection.isEmpty) {
            selectWordAtCursorPosition(editor);
        }
        let baseUrl = "http://docwiki.embarcadero.com/RADStudio/Rio/e/index.php?title=Special%3ASearch&search=%%SEARCH%%&fulltext=Search";
        baseUrl = baseUrl.replace("%%SEARCH%%", editor.document.getText(editor.selection))
        
        vscode.env.openExternal(vscode.Uri.parse(baseUrl));
    });
    context.subscriptions.push(disposableHelp);
}