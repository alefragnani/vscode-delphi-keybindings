/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { ChangeLogItem, ChangeLogKind, Sponsor, ContentProvider, Header, Image } from "../../vscode-whats-new/src/ContentProvider";

export class WhatsNewDelphiKeybindingsContentProvider implements ContentProvider {

    provideHeader(logoUrl: string): Header {
        return <Header>{logo: <Image> {src: logoUrl, height: 50, width: 50}, 
            message: `<b>Delphi Keybindings</b> ports popular <b>Delphi</b> keyboard shortcuts
            to Visual Studio Code, so you can take your </i>muscle memory</b> and feel
            like you were using <b>Delphi</b>.`};
    }

    provideChangeLog(): ChangeLogItem[] {
        let changeLog: ChangeLogItem[] = [];
        changeLog.push({kind: ChangeLogKind.NEW, message: "<b>Tokyo</b> shortcuts"});
        changeLog.push({kind: ChangeLogKind.FIXED, message: `<b>Replace</b> command has wrong keybinding - 
            <a title=\"Issue #2\" href=\"https://github.com/alefragnani/vscode-delphi-keybindings/issues/2\">
            Issue #s</a>`});
        changeLog.push({kind: ChangeLogKind.FIXED, message: `<b>Format Document</b> command was not working - 
            <a title=\"Issue #1\" href=\"https://github.com/alefragnani/vscode-delphi-keybindings/issues/1\">
            Issue #1</a>`});
            return changeLog;
    }

    provideSponsors(): Sponsor[] {
        let sponsors: Sponsor[] = [];
        return sponsors
    }
   
}