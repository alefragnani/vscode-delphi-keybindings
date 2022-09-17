/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import * as vscode from 'vscode';
import { DEFAULT_DELPHI_VERSION_FOR_DOCWIKI } from '../../constants';

export async function setupTestSuite(originalValues) {
    originalValues.delphiVersionInDocWiki = vscode.workspace.getConfiguration("delphiKeybindings").get<string>("delphiVersionInDocWiki", DEFAULT_DELPHI_VERSION_FOR_DOCWIKI);

    await vscode.workspace.getConfiguration('delphiKeybindings').update('delphiVersionInDocWiki', 'Seattle');
}

export async function teardownTestSuite(originalValues) {
    await vscode.workspace.getConfiguration('delphiKeybindings').update('delphiVersionInDocWiki', originalValues.delphiVersionInDocWiki);
}