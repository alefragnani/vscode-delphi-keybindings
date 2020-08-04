/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { commands } from "vscode";
import { Container } from "../container";
import { WhatsNewManager } from "../../vscode-whats-new/src/Manager";
import { WhatsNewDelphiKeybindingsContentProvider } from "./contentProvider";

export function registerWhatsNew() {
    const provider = new WhatsNewDelphiKeybindingsContentProvider();
    const viewer = new WhatsNewManager(Container.context).registerContentProvider("delphi-keybindings", provider);
    viewer.showPageInActivation();
    Container.context.subscriptions.push(commands.registerCommand('delphiKeybindings.whatsNew', () => viewer.showPage()))
}
