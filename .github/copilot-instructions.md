# VS Code Delphi Keybindings Extension

Always reference these instructions first and fall back to additional search or terminal commands only when project files do not provide enough context.

## Project Overview

This is a VS Code extension that provides popular Delphi keyboard shortcuts and commands for Visual Studio Code. It includes keybindings for debugging, editing, navigation, and two custom commands (Help and Select Word).

## Technology Stack

- Language: TypeScript
- Runtime: VS Code Extension API (Node + Web)
- Bundler: Webpack 5
- Linting: ESLint (`eslint-config-vscode-ext`)
- Testing: Mocha + `@vscode/test-electron`

## Working Effectively

Bootstrap and local setup:

```bash
git submodule init
git submodule update
npm install
```

Build and development quickstart:

```bash
npm run build
npm run lint
```

- Use `npm run watch` during active development.
- Use VS Code "Launch Extension" (F5) to validate behavior in Extension Development Host.
- Expected command timings are usually under 10 seconds.
- Never cancel `npm install`, `npm run watch`, or `npm test` once started.

## Build and Development Commands

- `npm run compile` - TypeScript compilation
- `npm run build` - Webpack development build
- `npm run watch` - Continuous webpack build
- `npm run lint` - ESLint validation
- `npm run test` - Full test suite
- `npm run vscode:prepublish` - Production build

## Testing and Validation

Manual validation checklist:

1. Ensure `npm run build` succeeds and creates files in `dist/`.
2. Run `npm run lint` and verify only expected warnings.
3. Launch Extension Host and test F1 and Ctrl+W custom commands.
4. Verify representative Delphi keybindings (F9, Ctrl+D, Ctrl+Y, Ctrl+G).

If tests fail with `ENOTFOUND update.code.visualstudio.com`, treat as environment-related.

## Project Structure and Key Files

```
src/
├── extension.ts          # Main extension entry point
├── commands.ts           # Custom command implementations
├── docWikiUriBuilder.ts  # DocWiki URL generation
└── test/                 # Mocha + VS Code test framework

dist/                     # Webpack bundles (extension-node.js, extension-web.js)
l10n/                     # Localization files
out/                      # TypeScript output for tests
```

## Coding Conventions and Patterns

### Indentation

- We spaces, not tabs.
- Use 4 spaces for indentation.

### Naming Conventions

- Use PascalCase for `type` names
- Use PascalCase for `enum` values
- Use camelCase for `function` and `method` names
- Use camelCase for `property` names and `local variables`
- Use whole words in names when possible

### Types

- Do not export `types` or `functions` unless you need to share it across multiple components
- Do not introduce new `types` or `values` to the global namespace
- Prefer `const` over `let` when possible.

### Strings

- Use "double quotes"
- All strings visible to the user need to be externalized using the `l10n` API
- Externalized strings must not use string concatenation. Use placeholders instead (`{0}`).

### Code Quality

- All files must include copyright header
- Prefer `async` and `await` over `Promise` and `then` calls
- All user facing messages must be localized using the applicable localization framework (for example `l10n.t` method)
- Keep imports organized: VS Code first, then internal modules.
- Use semicolons at the end of statements.
- Keep changes minimal and aligned with existing style.

### Import Organization

- Import VS Code API first: `import * as vscode from "vscode"`
- Group related imports together
- Use named imports for specific VS Code types
- Import from local modules using relative paths

## Extension Features and Configuration

### Key Features
1. **Keybinding**: Customize VS Code Keybinding to follow Delphi keys
2. **Internationalization support**: Localization of all user-facing strings

### Important Settings
- `delphiKeybindings.delphiVersionInDocWiki`

## Dependencies and External Tools

- Requires `vscode-whats-new` submodule initialization.
- No external runtime tools are required beyond standard extension toolchain.

## Troubleshooting and Known Limitations

- Missing submodules: run `git submodule init && git submodule update`.
- Webpack warnings during npm install can be normal.
- Network-restricted tests may fail due to VS Code download endpoints.
- For clean rebuild, remove `out/` and `dist/` then build again.

## CI and Pre-Commit Validation

Before committing:

1. `npm run lint`
2. `npm run build`
3. Launch Extension Host and test key custom commands

## Common Tasks

1. Update command implementations in `src/commands.ts` and corresponding manifest contributions.
2. Modify keybindings in `package.json` and validate conflicts/regressions.
3. Update localization and ensure command titles/settings strings remain synchronized.




0