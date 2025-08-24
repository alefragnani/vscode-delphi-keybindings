# VSCode Delphi Keybindings Extension

Always follow these instructions first and only fall back to additional search and context gathering if the information in the instructions is incomplete or found to be in error.

This is a VSCode extension that provides popular Delphi keyboard shortcuts and commands for Visual Studio Code. It includes keybindings for debugging, editing, navigation, and two custom commands (Help and Select Word).

## Working Effectively

### Dependencies and Setup
- Prerequisites: Git (>= 2.22.0), Node.js (>= 10.14.17) - Current tested with Node.js 20.x
- ALWAYS run these setup commands in order:
  ```
  git submodule init
  git submodule update
  npm install
  ```
- Setup takes ~15 seconds total. NEVER CANCEL during npm install.
- **Note**: npm install may show webpack warnings during installation but will complete successfully.

### Build and Development
- **Build**: `npm run build` - Takes ~3 seconds. NEVER CANCEL.
- **Production build**: `npm run vscode:prepublish` - Takes ~4 seconds, creates minified output
- **Watch mode**: `npm run watch` or `npm run webpack-dev` - Runs webpack in watch mode for development
- **Compile**: `npm run compile` - TypeScript compilation only (~2 seconds)
- **Clean build**: Delete `out/` and `dist/` directories, then run build commands

### Linting and Code Quality
- **Lint**: `npm run lint` - Takes ~1 second. Expect 3 warnings (acceptable)
- Always run `npm run lint` before committing changes
- Uses ESLint with TypeScript rules
- Warnings about `any` types in test files are acceptable

### Testing
- **IMPORTANT**: Tests require internet connectivity to download VS Code
- **Full test suite**: `npm test` - May fail in network-restricted environments
- Tests include compilation, linting, and VS Code extension tests
- Test compilation: `npm run test-compile` - Compiles TypeScript and webpack
- If tests fail due to network (ENOTFOUND update.code.visualstudio.com), this is expected in sandboxed environments

## File Structure and Key Locations

### Important Directories
- `src/` - Main TypeScript source code
- `src/test/` - Test files (Mocha + VS Code test framework)
- `dist/` - Webpack build output (extension-node.js, extension-web.js)
- `out/` - TypeScript compilation output
- `vscode-whats-new/` - Git submodule for "What's New" functionality
- `.vscode/` - VS Code workspace configuration (tasks, launch configs)

### Key Files
- `package.json` - Extension manifest, scripts, dependencies, keybindings
- `src/extension.ts` - Main extension entry point
- `src/commands.ts` - Custom command implementations (help, selectWord)
- `src/docWikiUriBuilder.ts` - DocWiki URL generation for help command
- `tsconfig.json` - TypeScript configuration
- `webpack.config.js` - Webpack bundling configuration

### Development Configuration
- `.vscode/tasks.json` - Build and watch tasks for VS Code
- `.vscode/launch.json` - Debugging configurations including "Launch Extension"

## Extension Functionality

### Keybindings Provided
The extension maps ~30 Delphi keyboard shortcuts to VS Code commands including:
- **Debugging**: F9 (Run), F8 (Step Over), F7 (Step Into), F5 (Toggle Breakpoint)
- **Editing**: Ctrl+D (Format), Ctrl+Y (Delete Line), Ctrl+; (Comment)
- **Navigation**: Ctrl+G (Go to Declaration), Alt+G (Go to Line)
- **IDE**: Ctrl+. (Command Palette), Ctrl+F9 (Build)

### Custom Commands
- `delphiKeybindings.help` (F1) - Opens Delphi DocWiki for selected word
- `delphiKeybindings.selectWord` (Ctrl+W) - Selects word at cursor
- `delphiKeybindings.whatsNew` - Shows extension changelog

## Validation and Testing Scenarios

### Manual Validation Steps
1. **Build validation**: Ensure `npm run build` succeeds and creates files in `dist/`
2. **Lint validation**: Run `npm run lint` and verify only expected warnings
3. **Extension loading**: Use VS Code "Launch Extension" debug configuration
4. **Command testing**: In launched extension host, test F1 and Ctrl+W commands
5. **Keybinding testing**: Verify common Delphi shortcuts work (F9, Ctrl+D, etc.)

### Development Workflow
1. Make code changes in `src/`
2. Run `npm run build` to compile and bundle
3. Run `npm run lint` to check code quality
4. Test in VS Code using "Launch Extension" configuration
5. For continuous development, use `npm run watch` or VS Code Build task (Ctrl+Shift+B)

### VS Code Development
- Open folder in VS Code
- Press F5 or use "Launch Extension" to open extension development host
- Use Ctrl+Shift+B to start watch task for automatic rebuilds
- Use "Reload Window" in extension development host to reload after changes

## Settings and Configuration

### Extension Settings
- `delphiKeybindings.delphiVersionInDocWiki` - Choose Delphi version for DocWiki (Alexandria, Sydney, Rio, Tokyo, Berlin, Seattle)

### Common Build Issues
- **Missing submodules**: Run `git submodule init && git submodule update`
- **ESLint pattern errors**: Ensure `vscode-whats-new/` submodule is initialized
- **Network test failures**: Expected in sandboxed environments - focus on build and lint validation
- **Webpack warnings during npm install**: These are normal and npm install will complete successfully
- **Clean build needed**: Delete `out/` and `dist/` directories, then run build commands

## CI and Production
- GitHub Actions workflow tests on macOS, Ubuntu, Windows with Node.js 16.x
- Production build: `npm run vscode:prepublish` (webpack in production mode)
- Extension supports both desktop and web VS Code environments
- Published to VS Code Marketplace and Open VSX Registry

## Time Expectations
- **Setup (submodules + npm install)**: 15 seconds - NEVER CANCEL
- **Build (webpack)**: 3 seconds - NEVER CANCEL  
- **Production build**: 4 seconds - NEVER CANCEL
- **Lint**: 1 second
- **TypeScript compile**: 2 seconds
- **Watch mode startup**: 3 seconds initial build
- **Tests**: May timeout due to VS Code download requirements - focus on build/lint validation instead

## Quick Reference

### Common Directory Contents
```
Repository root:
├── .github/                 # GitHub configuration
├── .vscode/                 # VS Code workspace settings
├── src/                     # Main TypeScript source
│   ├── test/               # Test files
│   ├── whats-new/          # What's New functionality  
│   ├── extension.ts        # Main entry point
│   └── commands.ts         # Custom commands
├── vscode-whats-new/       # Git submodule
├── dist/                   # Webpack output (created by build)
├── out/                    # TypeScript output (created by compile)
├── package.json            # Project manifest and scripts
└── tsconfig.json           # TypeScript configuration
```

### Expected Build Outputs
After successful build, `dist/` should contain:
- **Development build**: `extension-node.js` (~130KB), `extension-web.js` (~130KB) 
- **Production build**: `extension-node.js` (~44KB), `extension-web.js` (~44KB) - minified
- Corresponding `.map` files for debugging