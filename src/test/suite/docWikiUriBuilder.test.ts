/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the GPLv3 License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import * as assert from 'assert';
import { buildDocWikiUri } from '../../docWikiUriBuilder';

suite('DocWikiUriBuilder Test Suite', () => {
    test('can build a DocWiki Uri', async () => {
        // opens a file
        const delphiVersion = 'Alexandria';
        const textToSearchFor = 'test';
        const uri = buildDocWikiUri(delphiVersion, textToSearchFor);

        // assert - the new select must be `thank`
        assert.ok(uri.scheme === 'https');
        assert.ok(uri.authority === 'docwiki.embarcadero.com');
        assert.ok(uri.path === `/RADStudio/${delphiVersion}/e/index.php`);
        assert.ok(uri.query === `title=Special:Search&search=${textToSearchFor}&fulltext=Search`);
    });
});