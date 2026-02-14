# DN Monorepo Architecture Plan

## Overview

A monorepo combining React Native, Expo, and Storybook with independently publishable packages for design tokens, components, and journeys.

## Goals

- **Simplicity**: Minimal configuration, no unnecessary tooling
- **Maintainability**: Clear separation of concerns, standard conventions
- **Future-proof**: Each package independently publishable to npm
- **Working**: Expo app (Metro) and Storybook (Vite) running side by side without conflicts

## Tech Stack

- **Node**: 20+
- **Package Manager**: npm with workspaces
- **Framework**: React Native with Expo (SDK 52)
- **Storybook**: v8 with `@storybook/react-vite` (no Webpack)
- **TypeScript**: Project references for cross-package type checking
- **Bundlers**: Metro (Expo app) + Vite (Storybook) - completely separate, no conflicts

## Project Structure

```
dn-monorepo/
├── package.json                ← npm workspaces root
├── tsconfig.base.json          ← shared TypeScript config
├── packages/
│   ├── tokens/                 ← @dn/tokens
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── index.ts                ← main export
│   │       ├── tokenProcessor.ts       ← processes brand JSON into theme
│   │       ├── FontLoader.web.tsx      ← web font loading
│   │       ├── FontLoader.native.tsx   ← native font loading
│   │       └── brands/
│   │           ├── lloyds.json
│   │           ├── brandA.json
│   │           └── brandB.json
│   ├── components/             ← @dn/components
│   │   ├── package.json        ← depends on @dn/tokens
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── index.ts                ← main export (re-exports all components)
│   │       ├── ThemeProvider/
│   │       │   ├── index.tsx
│   │       │   ├── ThemeProvider.web.tsx
│   │       │   └── ThemeProvider.native.tsx
│   │       ├── ThemedText/
│   │       ├── Tile/
│   │       ├── Icon/
│   │       └── ...
│   └── journeys/               ← @dn/journeys
│       ├── package.json        ← depends on @dn/tokens + @dn/components
│       ├── tsconfig.json
│       └── src/
│           ├── index.ts
│           ├── combined-auth/
│           ├── summary/
│           ├── everyday/
│           └── ...
├── apps/
│   ├── visualiser/             ← Expo app (Metro bundler)
│   │   ├── package.json
│   │   ├── app.json
│   │   ├── metro.config.js     ← watchFolders for packages
│   │   ├── tsconfig.json
│   │   └── App.tsx
│   └── storybook/              ← Storybook web app (Vite bundler)
│       ├── package.json
│       ├── vite.config.ts      ← react-native-web aliases
│       ├── tsconfig.json
│       └── .storybook/
│           ├── main.ts
│           └── preview.tsx
```

## Package Dependency Graph

```
@dn/tokens          ← standalone, no internal deps
    ↑
@dn/components      ← depends on @dn/tokens
    ↑
@dn/journeys        ← depends on @dn/tokens + @dn/components
    ↑
apps/visualiser     ← depends on all three
apps/storybook      ← depends on all three
```

## Key Architecture Decisions

### 1. Two Separate Bundlers (No Conflicts)

The main pain point with Expo + Storybook is bundler conflicts. We avoid this entirely:

- **Expo/Visualiser** uses Metro (standard Expo setup)
- **Storybook** uses Vite (standard Storybook 8 setup with react-native-web)
- They never interfere with each other

### 2. No Build Step During Development

Both Metro and Vite can read TypeScript source directly:

- Metro resolves workspace packages via `watchFolders` in `metro.config.js`
- Vite resolves them naturally via npm workspace symlinks
- No need to run `tsc --watch` or any build process while developing

### 3. Platform-Specific Files (.web.tsx / .native.tsx)

Both bundlers respect the React Native convention:

- Metro automatically picks `.native.tsx` for iOS/Android
- Vite picks `.web.tsx` when configured with react-native-web aliases
- Files like `FontLoader` and `ThemeProvider` use this pattern where needed

### 4. Publishing Strategy

Each package can be published independently:

```bash
cd packages/tokens && npm run build && npm publish
cd packages/components && npm run build && npm publish
cd packages/journeys && npm run build && npm publish
```

The `build` script in each package runs `tsc` to produce JS + type declarations in a `dist/` folder. The `package.json` for each package points `main` and `types` to the dist output.

Consumers can install:
- `@dn/tokens` only (just tokens and processor)
- `@dn/components` (includes tokens as dependency)
- `@dn/journeys` (includes everything)

## Implementation Steps

### Step 1: Root Configuration
- Root `package.json` with npm workspaces
- `tsconfig.base.json` with shared compiler options

### Step 2: Tokens Package
- `packages/tokens/package.json`
- `packages/tokens/tsconfig.json`
- Minimal `src/index.ts` with a simple token export (proof of concept)

### Step 3: Components Package
- `packages/components/package.json`
- `packages/components/tsconfig.json`
- Minimal `src/index.ts` with one simple component that imports from `@dn/tokens`

### Step 4: Journeys Package
- `packages/journeys/package.json`
- `packages/journeys/tsconfig.json`
- Minimal `src/index.ts` with one simple journey that imports from `@dn/components`

### Step 5: Expo Visualiser App
- Standard Expo setup
- `metro.config.js` configured for workspace packages
- `App.tsx` that imports from all three packages and renders something

### Step 6: Storybook App
- Storybook 8 with `@storybook/react-vite`
- `vite.config.ts` with react-native-web aliases
- `.storybook/main.ts` pointing to stories in packages
- One example story for the component from Step 3

### Step 7: Verify Everything Works
- `npm install` from root
- `npm run visualiser` starts Expo dev server
- `npm run storybook` starts Storybook dev server
- Both render content from shared packages
- TypeScript checks pass across all packages

### Step 8: Migrate Real Content
- Move tokens, components, and journeys from existing projects
- This step is manual and incremental

## Commands (Expected)

From root:
```bash
npm install                          # install all workspaces
npm run visualiser                   # start Expo dev server
npm run storybook                    # start Storybook dev server
npm run typecheck                    # TypeScript check across all packages
npm run build -w @dn/tokens         # build tokens for publishing
```

## Notes

- Skeleton uses minimal placeholder content to prove the setup works
- Real components, tokens, and journeys are migrated manually after skeleton is confirmed working
- The `.web.tsx` / `.native.tsx` pattern is used only where platform behaviour genuinely differs