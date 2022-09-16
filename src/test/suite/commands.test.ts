/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import * as vscode from 'vscode';
import * as assert from 'assert';
import * as sinon from 'sinon';

suite('selectWord command', () => {
    
    // suiteSetup(() => 
    // );

    test('can select word', async () => {
        // opens a file
        const filename = vscode.Uri.joinPath(vscode.workspace.workspaceFolders[0].uri, 'test.md');
        const doc = await vscode.workspace.openTextDocument(filename);
        await vscode.window.showTextDocument(doc);

        // put the cursor at the `thank` word 
        const sel = new vscode.Selection(new vscode.Position(2, 16), new vscode.Position(2, 16));
        vscode.window.activeTextEditor.selection = sel;
        
        // runs the command
        await vscode.commands.executeCommand('delphiKeybindings.selectWord');

        // get the newly selected text
        const currentSelection = vscode.window.activeTextEditor.selection;
        const newRange = new vscode.Range(currentSelection.start, currentSelection.end);
        const text = vscode.window.activeTextEditor.document.getText(newRange);

        // assert - the new select must be `thank`
        assert.ok(text === 'thank');
    });

    test('cannot select word on empty space', async () => {
        // opens a file
        const filename = vscode.Uri.joinPath(vscode.workspace.workspaceFolders[0].uri, 'test.md');
        const doc = await vscode.workspace.openTextDocument(filename);
        await vscode.window.showTextDocument(doc);

        // put the cursor at an empty line
        const sel = new vscode.Selection(new vscode.Position(3, 0), new vscode.Position(3, 0));
        vscode.window.activeTextEditor.selection = sel;
        
        // runs the command
        await vscode.commands.executeCommand('delphiKeybindings.selectWord');

        // get the newly selected text (which must be empty)
        const currentSelection = vscode.window.activeTextEditor.selection;
        const newRange = new vscode.Range(currentSelection.start, currentSelection.end);
        const text = vscode.window.activeTextEditor.document.getText(newRange);

        // assert - the new select must be `thank`
        assert.ok(text === '');
    });

    test('cannot select word if no file is open', async () => {
        // closes all files
        await vscode.commands.executeCommand('workbench.action.closeAllEditors');

        const mock = sinon.mock(vscode.window);
        const expectation = mock.expects('showInformationMessage');
        
        // runs the command
        await vscode.commands.executeCommand('delphiKeybindings.selectWord');

        mock.restore();
        
        // assert - must be called
        assert(expectation.calledOnce);
    });
});

suite('DocWiki command', () => {
    test('can call docwiki for some word', async () => {
        // opens a file
        const filename = vscode.Uri.joinPath(vscode.workspace.workspaceFolders[0].uri, 'test.md');
        const doc = await vscode.workspace.openTextDocument(filename);
        await vscode.window.showTextDocument(doc);

        // put the cursor at the `thank` word 
        const sel = new vscode.Selection(new vscode.Position(2, 16), new vscode.Position(2, 16));
        vscode.window.activeTextEditor.selection = sel;

        const mock = sinon.mock(vscode.env);
        const expectation = mock.expects('openExternal');
        
        // runs the command
        await vscode.commands.executeCommand('delphiKeybindings.help');

        mock.restore();

        // assert - must be called
        assert(expectation.calledOnce);
        assert(expectation.calledOnceWith(vscode.Uri.parse('https://docwiki.embarcadero.com/RADStudio/Alexandria/e/index.php?title=Special%3ASearch&search=thank&fulltext=Search')));
    });

    test('cannot call docwiki if no file is open', async () => {
        // closes all files
        await vscode.commands.executeCommand('workbench.action.closeAllEditors');

        const mock = sinon.mock(vscode.window);
        const expectation = mock.expects('showInformationMessage');
        
        // runs the command
        await vscode.commands.executeCommand('delphiKeybindings.help');

        mock.restore();
        
        // assert - must be called
        assert(expectation.calledOnce);
    });
});