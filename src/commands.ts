/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { commands, env, Uri, window, workspace } from "vscode";
import { selectWordAtCursorPosition } from "vscode-ext-selection";
import { DEFAULT_DELPHI_VERSION_FOR_DOCWIKI } from "./constants";
import { Container } from './container';

export function registerCommands() {

    const disposableSelectWord = commands.registerCommand('delphiKeybindings.selectWord', () => {
        const editor = window.activeTextEditor;
        if (!editor) {
          window.showInformationMessage("Open a file first to select word");
          return;
        }
        const selection = editor.selection;
        if (selection.isEmpty) {
            selectWordAtCursorPosition(editor);
        }

    });
    Container.context.subscriptions.push(disposableSelectWord);

    const disposableHelp = commands.registerCommand('delphiKeybindings.help', () => {
        const editor = window.activeTextEditor;
        if (!editor) {
            window.showInformationMessage("Open a file first to locate help in DocWiki");
            return;
          }
        const selection = editor.selection;
        if (selection.isEmpty) {
            selectWordAtCursorPosition(editor);
        }

        const delphiVersion = workspace.getConfiguration("delphiKeybindings").get<string>("delphiVersionInDocWiki", DEFAULT_DELPHI_VERSION_FOR_DOCWIKI);
        const textToSearchFor = editor.document.getText(editor.selection);
        const baseUrl = `https://docwiki.embarcadero.com/RADStudio/${delphiVersion}/e/index.php?title=Special%3ASearch&search=${textToSearchFor}&fulltext=Search`;
        
        env.openExternal(Uri.parse(baseUrl));
    });
    Container.context.subscriptions.push(disposableHelp);

}