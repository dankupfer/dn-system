# DN Monorepo

A monorepo combining React Native (Expo), Storybook, and independently publishable design system packages.

## What This Is

This monorepo provides a working foundation for a multi-brand design system with:
- **Shared packages** for tokens, components, and journeys
- **Expo app** (Metro bundler) for native/web visualisation and development
- **Storybook app** (Vite bundler) for component documentation and testing
- **Multi-brand theming** with light/dark mode support

## Version Reference

| Tool/Package | Version | Notes |
|---|---|---|
| Node.js | 20+ | Tested on 24, any LTS 20+ works |
| npm | 10+ | Workspace support required |
| Expo SDK | 52 (~52.0.46) | Stable. Upgrade to 54 separately later |
| React | 18.3.1 | |
| React Native | 0.76.9 | |
| react-native-web | ~0.19.13 | |
| Storybook | 8.6+ | @storybook/react-vite (not Webpack) |
| Vite | 6.1+ | Used only by Storybook |
| TypeScript | 5.1+ | |
| Metro | via Expo SDK 52 | Used only by Visualiser |
```

Then let's commit everything:
```
git add -A && git commit -m 'docs: add version reference, migration guide, and expo packages guide

- README.md updated with version reference table
- docs/MIGRATION_GUIDE.md for reproducing monorepo on corporate device
- docs/EXPO_PACKAGES_GUIDE.md for managing expo-specific dependencies'

## Project Structure

```
dn-monorepo/
├── package.json                ← npm workspaces root
├── tsconfig.base.json          ← shared TypeScript config (all packages extend this)
├── packages/
│   ├── tokens/                 ← @dn/tokens - design tokens, fonts, token processor
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── src/
│   │   │   ├── index.ts                ← main exports
│   │   │   ├── tokenProcessor.ts       ← Token[] → ProcessedTheme
│   │   │   ├── FontLoader.native.tsx   ← native font loading (expo-font)
│   │   │   ├── FontLoader.web.tsx      ← web font loading (FontFace API)
│   │   │   ├── FontLoader.tsx          ← fallback re-export
│   │   │   ├── types/
│   │   │   │   └── assets.d.ts         ← .ttf and .woff2 declarations
│   │   │   └── utils/
│   │   │       └── iconResolver.ts     ← simple name → full path mapping
│   │   ├── tokens/
│   │   │   ├── tokens.json             ← all design tokens (Token[] format)
│   │   │   └── icons.json              ← all icons (SVG per brand/theme)
│   │   └── fonts/                      ← .ttf (native) and .woff2 (web) font files
│   ├── components/             ← @dn/components - UI component library
│   │   ├── package.json        ← depends on @dn/tokens
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── index.ts                ← exports all components + re-exports key types
│   │       ├── ThemeProvider/
│   │       │   └── index.tsx           ← React context wrapping token processing
│   │       └── ActionButton/
│   │           ├── index.tsx           ← component implementation
│   │           └── ActionButton.stories.tsx  ← colocated story
│   └── journeys/               ← @dn/journeys - multi-screen user flows
│       ├── package.json        ← depends on @dn/tokens + @dn/components
│       ├── tsconfig.json
│       └── src/
│           ├── index.ts
│           └── SampleJourney/
│               └── index.tsx           ← uses ThemeProvider + ActionButton
├── apps/
│   ├── visualiser/             ← Expo app (Metro bundler)
│   │   ├── package.json
│   │   ├── app.json
│   │   ├── metro.config.js     ← workspace resolution + woff2 asset support
│   │   ├── tsconfig.json
│   │   ├── index.js            ← Expo entry point
│   │   └── App.tsx             ← renders ThemeProvider + SampleJourney
│   └── storybook/              ← Storybook 8 web app (Vite bundler)
│       ├── package.json
│       ├── vite.config.ts      ← react-native-web alias + asset handling
│       ├── tsconfig.json
│       ├── .storybook/
│       │   ├── main.ts         ← story discovery paths (scans all packages)
│       │   └── preview.tsx     ← ThemeProvider decorator + brand/theme toolbar
│       └── src/
│           └── SampleJourney.stories.tsx
└── docs/
    └── EXPO_PACKAGES_GUIDE.md  ← how to add expo-av, expo-linear-gradient, etc.
```

## Package Dependency Graph

```
@dn/tokens              ← standalone, no internal dependencies
    ↑
@dn/components          ← depends on @dn/tokens
    ↑
@dn/journeys            ← depends on @dn/tokens + @dn/components
    ↑
apps/visualiser         ← depends on all three (Expo/Metro)
apps/storybook          ← depends on all three (Vite)
```

## Getting Started

### Prerequisites

- Node 20+
- npm (not yarn, not pnpm)

### Install and Run

```bash
# Install all workspaces from the root (always from root, never from individual packages)
npm install

# Start the Expo visualiser (web)
npm run visualiser

# Start Storybook (separate terminal)
npm run storybook
```

### Available Commands

From root:
```bash
npm run visualiser          # Expo dev server (Metro)
npm run storybook           # Storybook dev server (Vite) on port 6006
npm run typecheck           # TypeScript check across all packages
```

From apps/visualiser:
```bash
npm run start               # Expo dev server
npm run web                 # Expo web
npm run ios                 # Expo iOS simulator
npm run android             # Expo Android emulator
```

## Architecture Decisions

### Two Separate Bundlers

This is the key decision that makes everything work. Previous attempts to run Storybook inside Expo (sharing Metro) or Expo inside Storybook (sharing Webpack/Vite) caused endless configuration conflicts.

- **Metro** (Expo app): Standard Expo bundler for native + web
- **Vite** (Storybook): Standard Storybook 8 bundler for component docs

They never interfere with each other because they are completely separate processes with separate configs.

### No Build Step During Development

Both Metro and Vite read TypeScript source directly from the packages:
- Metro uses `watchFolders` in `metro.config.js` to see package source
- Vite follows npm workspace symlinks naturally
- Changes in packages are picked up immediately (Storybook hot reloads, Expo may need manual refresh)

There is no `tsc --watch`, no pre-compilation step, no build pipeline during development.

### Platform-Specific Files (.web.tsx / .native.tsx)

Both bundlers respect the React Native file extension convention:
- Metro picks `.native.tsx` for iOS/Android
- Vite picks `.web.tsx` for Storybook (because of the extensions config)

Used for:
- `FontLoader.native.tsx` → uses `expo-font` with `.ttf` files
- `FontLoader.web.tsx` → uses `FontFace` API with `.woff2` files

### npm Workspaces (Not pnpm, Not Yarn)

npm workspaces is the simplest option:
- Hoists all dependencies to root `node_modules/`
- Creates symlinks at `node_modules/@dn/*` → `packages/*`
- No extra tooling (no Turborepo, no Lerna, no Nx)
- Always run `npm install` from root

### Stories Colocated with Components

Stories live next to the components they document:
```
packages/components/src/ActionButton/
  index.tsx
  ActionButton.stories.tsx
```

Storybook discovers them via glob patterns in `.storybook/main.ts`:
```ts
stories: [
  '../../../packages/components/src/**/*.stories.@(ts|tsx)',
  '../../../packages/journeys/src/**/*.stories.@(ts|tsx)',
]
```

Stories are excluded from published builds via `tsconfig.json`:
```json
{ "exclude": ["**/*.stories.tsx"] }
```

## Token System

### How Tokens Work

Tokens are stored as a flat `Token[]` array in `tokens/tokens.json`. Each token has values per brand:

```json
{
  "name": "background_page_default",
  "type": "color",
  "values": {
    "reimaginedLloyds": "FFF8F9FA",
    "reimaginedLloydsDark": "FF0A0A0A",
    "lloyds": "FFF8F9FA",
    "halifax": "FFFFFFFF"
  }
}
```

The `tokenProcessor.ts` converts this flat array into a structured `ProcessedTheme`:

```ts
const theme = processTokens(tokens, 'reimaginedLloyds', 'light');
// theme.colors.page.background → '#FFF8F9FA'
// theme.spacing.md → 16
// theme.typography.body.fontFamily → 'GT-Ultra-Standard-Regular'
```

Color values are stored without `#` prefix in the JSON. The `getToken` function adds the `#` prefix automatically for color type tokens.

### Available Brands

```
reimaginedLloyds / reimaginedLloydsDark
lloyds
halifax
bos
mbna
scottishWidows
reimaginedBos / reimaginedBosDark
reimaginedHalifax / reimaginedHalifaxDark
reimaginedMbna / reimaginedMbnaDark
reimaginedScottishWidows / reimaginedScottishWidowsDark
```

Dark mode appends 'Dark' to the brand name. This is handled by `getBrandForTokens()` in the ThemeProvider.

### ProcessedTheme Structure

```ts
interface ProcessedTheme {
  tokens: { [tokenName: string]: string | number };  // Direct access to any token
  colors: {
    action: { background, backgroundPressed, backgroundDisabled, text, border };
    brandAccent: { background, backgroundPressed, text };
    page: { background };
    panel: { background };
    text: { default, subdued };
    border: { default, action };
  };
  spacing: { xs: 8, sm: 12, md: 16, lg: 24 };
  borderRadius: { button };
  borderWidth: { button };
  typography: {
    heading: number;
    body: { fontSize, fontFamily };
    small: number;
  };
}
```

## ThemeProvider

The ThemeProvider in `@dn/components` wraps the token processing system:

```tsx
import { ThemeProvider } from '@dn/components';

<ThemeProvider initialBrand="reimaginedLloyds" initialThemeMode="light">
  <App />
</ThemeProvider>
```

### useTheme Hook

```tsx
import { useTheme } from '@dn/components';

const MyComponent = () => {
  const {
    theme,         // ProcessedTheme - structured token values
    themeName,     // 'light' | 'dark'
    brandName,     // current BrandName
    toggleTheme,   // switch light/dark
    setTheme,      // set specific mode
    setBrand,      // set specific brand
    getToken,      // direct token access: getToken('background_page_default')
    getNumericToken, // numeric token: getNumericToken('spacing_size_16')
    isLoading,     // always false (sync processing)
  } = useTheme();

  return (
    <View style={{ backgroundColor: theme.colors.page.background }}>
      <Text style={{
        color: theme.colors.text.default,
        fontSize: theme.typography.body.fontSize,
        fontFamily: theme.typography.body.fontFamily,
      }}>
        Hello
      </Text>
    </View>
  );
};
```

## Storybook

### Brand and Theme Switching

Storybook toolbar includes Brand and Theme dropdowns configured in `.storybook/preview.tsx`. These re-render the ThemeProvider decorator with the selected brand/mode, so every story automatically reflects the chosen theme.

### Adding Stories

Place stories next to the component:

```tsx
// packages/components/src/MyComponent/MyComponent.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from './index';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/MyComponent',
  component: MyComponent,
};
export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = {
  args: { label: 'Hello' },
};
```

After adding a new story, if Storybook doesn't pick it up, clear the cache:
```bash
rm -rf apps/storybook/node_modules/.cache/storybook
npm run storybook
```

## Adding New Components

### 1. Create the component

```bash
mkdir -p packages/components/src/MyComponent
```

Create `index.tsx`:
```tsx
// packages/components/src/MyComponent/index.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../ThemeProvider';

interface MyComponentProps {
  label: string;
}

export const MyComponent: React.FC<MyComponentProps> = ({ label }) => {
  const { theme } = useTheme();
  return (
    <View style={{ padding: theme.spacing.md }}>
      <Text style={{ color: theme.colors.text.default }}>{label}</Text>
    </View>
  );
};
```

### 2. Export from index

Add to `packages/components/src/index.ts`:
```ts
export { MyComponent } from './MyComponent';
```

### 3. Add a story (optional but recommended)

Create `packages/components/src/MyComponent/MyComponent.stories.tsx` as shown above.

### 4. Use in journeys or apps

```tsx
import { MyComponent } from '@dn/components';

<MyComponent label="Hello" />
```

## Adding Expo-Specific Packages

See `docs/EXPO_PACKAGES_GUIDE.md` for detailed instructions. The short version:

1. Install in `apps/visualiser` via `npx expo install <package>`
2. Declare as optional `peerDependency` in the package that uses it
3. If native-only: create `.native.tsx` (real) and `.web.tsx` (fallback) versions
4. If web-compatible: also install in `apps/storybook`

## Publishing Packages

Each package can be published independently to npm:

```bash
cd packages/tokens && npm run build && npm publish
cd packages/components && npm run build && npm publish
cd packages/journeys && npm run build && npm publish
```

The `build` script runs `tsc` which outputs to `dist/`. For publishing, update each `package.json` to point `main` and `types` to the dist output:

```json
{
  "main": "dist/src/index.js",
  "types": "dist/src/index.d.ts"
}
```

During development, `main` points to `src/index.ts` so bundlers read source directly.

Stories are excluded from the build via `tsconfig.json` exclude rules.

## Key Configuration Files Explained

### Root `package.json`
Defines npm workspaces pointing to `packages/*` and `apps/*`. Contains root-level scripts for convenience.

### `tsconfig.base.json`
Shared TypeScript config. Key settings:
- `moduleResolution: 'bundler'` → trusts Metro/Vite to resolve, no path aliases needed
- `jsx: 'react-jsx'` → modern JSX transform
- `resolveJsonModule: true` → allows importing .json files
- `isolatedModules: true` → required by both Metro and Vite

### `apps/visualiser/metro.config.js`
- `watchFolders: [monorepoRoot]` → Metro watches all packages for changes
- `nodeModulesPaths` → resolves from both app and root node_modules
- `assetExts: [..., 'woff2']` → Metro recognises .woff2 font files
- `disableHierarchicalLookup: true` → ensures single copy of react/react-native

### `apps/storybook/vite.config.ts`
- `react-native` aliased to `react-native-web`
- Extensions ordered with `.web.tsx` first so Vite picks web-specific files
- `assetsInclude` for font files

### `apps/storybook/.storybook/main.ts`
- `stories` glob patterns scan into `packages/` for colocated stories
- `viteFinal` ensures the react-native-web alias is applied to Storybook's Vite config

## Troubleshooting

### Metro can't resolve a package from packages/
Check `metro.config.js` has `watchFolders` pointing to monorepo root and `nodeModulesPaths` includes both app and root node_modules.

### Storybook shows 'importers[path] is not a function'
Clear the Storybook cache: `rm -rf apps/storybook/node_modules/.cache/storybook`

### TypeScript errors about missing types from @dn/tokens
Make sure `packages/components/src/index.ts` re-exports the types consumers need:
```ts
export type { ProcessedTheme, BrandName, ThemeMode } from '@dn/tokens';
```

### Font files not found
- Metro: check `assetExts` in `metro.config.js` includes `woff2`
- Vite: check `assetsInclude` in `vite.config.ts` includes `**/*.woff2`
- Ensure actual font files exist in `packages/tokens/fonts/`

### Expo web needs manual refresh after package changes
This is normal Metro web behaviour. Storybook (Vite) hot reloads reliably.

### npm install creates node_modules in a package folder
This shouldn't happen. Always run `npm install` from the monorepo root, never from individual packages.

### Dark mode not working
The token system appends 'Dark' to the brand name for dark mode (e.g. 'reimaginedLloyds' → 'reimaginedLloydsDark'). Make sure `tokens.json` has values for the dark brand variant.

### Color tokens showing as red (#FF0000)
This means a token name wasn't found for the current brand. Check the token name exists in `tokens.json` with a value for the active brand.