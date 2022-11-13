/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { commands, env, window, workspace, l10n } from "vscode";
import { selectWordAtCursorPosition } from "vscode-ext-selection";
import { DEFAULT_DELPHI_VERSION_FOR_DOCWIKI } from "./constants";
import { Container } from './container';
import { buildDocWikiUri } from "./docWikiUriBuilder";

export function registerCommands() {

    const disposableSelectWord = commands.registerCommand('delphiKeybindings.selectWord', () => {
        const editor = window.activeTextEditor;
        if (!editor) {
            window.showInformationMessage(l10n.t("Open a file first to select word"));
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
            window.showInformationMessage(l10n.t("Open a file first to locate help in DocWiki"));
            return;
          }
        const selection = editor.selection;
        if (selection.isEmpty) {
            selectWordAtCursorPosition(editor);
        }

        const delphiVersion = workspace.getConfiguration("delphiKeybindings").get<string>("delphiVersionInDocWiki", DEFAULT_DELPHI_VERSION_FOR_DOCWIKI);
        const textToSearchFor = editor.document.getText(editor.selection);

        env.openExternal(buildDocWikiUri(delphiVersion, textToSearchFor));
    });
    Container.context.subscriptions.push(disposableHelp);

}