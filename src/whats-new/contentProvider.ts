/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { ChangeLogItem, ChangeLogKind, ContentProvider, Header, Image, IssueKind, SocialMediaProvider, SupportChannel } from "../../vscode-whats-new/src/ContentProvider";

export class DelphiKeybindingsContentProvider implements ContentProvider {

    provideHeader(logoUrl: string): Header {
        return <Header>{logo: <Image> {src: logoUrl, height: 50, width: 50}, 
            message: `<b>Delphi Keybindings</b> ports popular <b>Delphi</b> keyboard shortcuts
            to Visual Studio Code, so you can take your </i>muscle memory</b> and feel
            like you were using <b>Delphi</b>.`};
    }

    provideChangeLog(): ChangeLogItem[] {
        const changeLog: ChangeLogItem[] = [];

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "9.5.0", releaseDate: "March 2022" } });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Add Web support",
                id: 42,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Change license to GPLv3",
                id: 50,
                kind: IssueKind.Issue
            }
        });

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "9.4.0", releaseDate: "October 2021" } });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Add CONTRIBUTING documentation",
                id: 43,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Update dependencies",
                id: 45,
                kind: IssueKind.Issue
            }
        });

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "9.3.0", releaseDate: "May 2021" } });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "Support <b>Workspace Trust</b>",
                id: 39,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "Support <b>Virtual Workspaces</b>",
                id: 38,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Do not show welcome message if installed by Settings Sync",
                id: 22,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Security Alert: lodash",
                id: 37,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Security Alert: ssri",
                id: 25,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Security Alert: y18n",
                id: 24,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Security Alert: elliptic",
                id: 21,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Security Alert: ini",
                id: 20,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "9.2.1", releaseDate: "November 2020" } });
        changeLog.push({
            kind: ChangeLogKind.FIXED,
            detail: {
                message: "Word navigation",
                id: 17,
                kind: IssueKind.Issue
            }
        });

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "9.2.0", releaseDate: "September 2020" } });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "<b>Codespaces</b> Support",
                id: 16,
                kind: IssueKind.Issue
            }
        });
        
        return changeLog;
 
    }

    provideSupportChannels(): SupportChannel[] {
        const supportChannels: SupportChannel[] = [];
        supportChannels.push({
            title: "Become a sponsor on GitHub",
            link: "https://github.com/sponsors/alefragnani",
            message: "Become a Sponsor"
        });
        supportChannels.push({
            title: "Donate via PayPal",
            link: "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=EP57F3B6FXKTU&lc=US&item_name=Alessandro%20Fragnani&item_number=vscode%20extensions&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted",
            message: "Donate via PayPal"
        });
        return supportChannels;
    }
}

export class DelphiKeybindingsSocialMediaProvider implements SocialMediaProvider {
    public provideSocialMedias() {
        return [{
            title: "Follow me on Twitter",
            link: "https://www.twitter.com/alefragnani"
        }];
    }
}