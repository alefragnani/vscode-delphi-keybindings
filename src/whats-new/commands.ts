/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { commands } from "vscode";
import { Container } from "../container";
import { WhatsNewManager } from "../../vscode-whats-new/src/Manager";
import { DelphiKeybindingsContentProvider, DelphiKeybindingsSocialMediaProvider } from "./contentProvider";

export function registerWhatsNew() {
    const provider = new DelphiKeybindingsContentProvider();
    const viewer = new WhatsNewManager(Container.context)
        .registerContentProvider("alefragnani", "delphi-keybindings", provider)
        .registerSocialMediaProvider(new DelphiKeybindingsSocialMediaProvider())
    viewer.showPageInActivation();
    Container.context.subscriptions.push(commands.registerCommand('delphiKeybindings.whatsNew', () => viewer.showPage()))
}
