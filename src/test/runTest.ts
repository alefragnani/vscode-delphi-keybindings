import * as path from 'path';
import * as os from 'os';
import { execSync } from 'child_process';

import { downloadAndUnzipVSCode, runTests } from '@vscode/test-electron';

async function main() {
	try {
		// The folder containing the Extension Manifest package.json
		// Passed to `--extensionDevelopmentPath`
		const extensionDevelopmentPath = path.resolve(__dirname, '../../../');

		// The path to test runner
		// Passed to --extensionTestsPath
		const extensionTestsPath = path.resolve(__dirname, './suite/index');
		const userDataDirBase = process.platform === 'darwin' ? '/tmp' : os.tmpdir();
		const userDataDir = path.join(userDataDirBase, `vscode-test-user-data-${process.pid}`);

		// Download VS Code first so we can remove macOS quarantine before launching
		const vscodeExecutablePath = await downloadAndUnzipVSCode('stable');

		// On macOS, remove the quarantine attribute set by Gatekeeper which would
		// prevent spawning the downloaded Electron binary in CI environments
		if (process.platform === 'darwin') {
			// Walk up from the executable to find the .app bundle root
			let appDir = vscodeExecutablePath;
			while (appDir && !appDir.endsWith('.app')) {
				appDir = path.dirname(appDir);
			}
			if (appDir && appDir.endsWith('.app')) {
				try {
					execSync(`xattr -dr com.apple.quarantine "${appDir}"`, { stdio: 'inherit' });
				} catch {
					// xattr may fail if the attribute is not present; ignore the error
				}
			}
		}

		// Run the integration tests using the pre-downloaded VS Code
		await runTests({
			vscodeExecutablePath,
			extensionDevelopmentPath,
			extensionTestsPath,
			launchArgs: [
				'./testworkspace',
				`--user-data-dir=${userDataDir}`,
			],
		});
	} catch (err) {
		console.error(err);
		console.error('Failed to run tests');
		process.exit(1);
	}
}

main();
