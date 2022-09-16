/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { Uri } from "vscode";

export function buildDocWikiUri(delphiVersion: string, textToSearchFor: string): Uri {
    return Uri.parse(`https://docwiki.embarcadero.com/RADStudio/${delphiVersion}/e/index.php?title=Special%3ASearch&search=${textToSearchFor}&fulltext=Search`);
}