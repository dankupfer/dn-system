# Migration Guide: Reproducing the Monorepo on Corporate Device

## Overview

This guide covers how to take the working dn-system monorepo skeleton and reproduce it on the corporate device, then migrate existing components from the separate dn-tokens, dn-components, and dn-journeys projects into it.

## Version Reference

| Tool/Package | Version | Notes |
|---|---|---|
| Node.js | 20+ (tested on 24) | Any LTS version 20+ should work |
| npm | 10+ | Comes with Node, needs workspace support |
| Expo SDK | 52 (~52.0.46) | Stable, upgrade to 54 later as separate step |
| React | 18.3.1 | |
| React Native | 0.76.9 | |
| react-native-web | ~0.19.13 | |
| Storybook | 8.6+ | Using @storybook/react-vite |
| Vite | 6.1+ | |
| TypeScript | 5.1+ | |

## Step-by-Step Migration

### Phase 1: Clone and Verify Skeleton

1. Clone the dn-system repo on the corporate device
2. Run `npm install` from root
3. Run `npm run visualiser` — verify Expo web loads
4. Run `npm run storybook` — verify Storybook loads with brand/theme switching
5. Run `npm run typecheck` — verify no errors

If any of these fail due to corporate firewall/proxy:
- Check npm registry access: `npm config set registry https://registry.npmjs.org/`
- If behind a proxy: `npm config set proxy http://your-proxy:port`
- If SSL issues: `npm config set strict-ssl false` (temporary)

### Phase 2: Migrate Tokens

The tokens package is the foundation. Migrate it first.

1. **Replace token data files:**
   ```bash
   # Copy from existing dn-tokens project
   cp path/to/dn-tokens/tokens/tokens.json packages/tokens/tokens/tokens.json
   cp path/to/dn-tokens/tokens/icons.json packages/tokens/tokens/icons.json
   ```

2. **Replace tokenProcessor.ts** (if the corporate version has evolved):
   ```bash
   cp path/to/dn-tokens/src/tokenProcessor.ts packages/tokens/src/tokenProcessor.ts
   ```
   Keep the `#` prefix fix in `getToken` for color values:
   ```ts
   if (typeof value === 'string') {
       if (token.type === 'color' && !value.startsWith('#')) return '#' + value;
       return value;
   }
   ```

3. **Replace FontLoader files:**
   ```bash
   cp path/to/dn-tokens/src/FontLoader.native.tsx packages/tokens/src/FontLoader.native.tsx
   cp path/to/dn-tokens/src/FontLoader.web.tsx packages/tokens/src/FontLoader.web.tsx
   ```
   Ensure both have `// @ts-nocheck` at the top (for font asset imports).

4. **Replace font files:**
   ```bash
   cp path/to/dn-tokens/fonts/*.ttf packages/tokens/fonts/
   cp path/to/dn-tokens/fonts/*.woff2 packages/tokens/fonts/
   ```

5. **Update iconResolver.ts** with full mappings from corporate version.

6. **Update index.ts** if the corporate version exports additional utilities.

7. **Verify:**
   ```bash
   npm run typecheck
   npm run visualiser
   ```

### Phase 3: Migrate Components

Components depend on tokens. Migrate after tokens are working.

1. **Copy component folders** from existing dn-components into `packages/components/src/`:
   ```bash
   # Example for each component
   cp -r path/to/dn-components/src/ActionButton packages/components/src/ActionButton
   cp -r path/to/dn-components/src/ThemedText packages/components/src/ThemedText
   cp -r path/to/dn-components/src/Icon packages/components/src/Icon
   # ... etc
   ```

2. **Fix imports in copied components.** The main change is the import path for tokens:
   ```ts
   // OLD (separate packages)
   import { ProcessedTheme } from '@dankupfer/dn-tokens';
   import { useTheme } from '../theme/ThemeProvider';

   // NEW (monorepo)
   import { ProcessedTheme } from '@dn/tokens';
   import { useTheme } from '../ThemeProvider';
   ```

   Or if using the re-export from components index:
   ```ts
   import { useTheme, ProcessedTheme } from '@dn/components';
   ```

3. **Update packages/components/src/index.ts** to export all migrated components.

4. **Install missing dependencies.** As you copy components, some will need extra packages:
   - **Web-compatible packages** (expo-linear-gradient): add to both visualiser and storybook
   - **Native-only packages** (expo-av): add only to visualiser, create .web.tsx fallback
   - See docs/EXPO_PACKAGES_GUIDE.md for details

   ```bash
   # For web-compatible expo packages
   cd apps/visualiser && npx expo install expo-linear-gradient
   cd apps/storybook && npm install expo-linear-gradient

   # For native-only packages
   cd apps/visualiser && npx expo install expo-av
   # Then create ComponentName.web.tsx fallback
   ```

5. **Add peerDependencies** to packages/components/package.json:
   ```json
   {
     "peerDependencies": {
       "react": "*",
       "react-native": "*",
       "expo-linear-gradient": "*"
     },
     "peerDependenciesMeta": {
       "expo-linear-gradient": { "optional": true }
     }
   }
   ```

6. **Verify after each component:**
   ```bash
   npm run typecheck
   npm run storybook   # check component renders
   npm run visualiser  # check in Expo
   ```

### Phase 4: Migrate Journeys

Journeys depend on both tokens and components. Migrate last.

1. **Copy journey folders** from existing projects into `packages/journeys/src/`

2. **Fix imports:**
   ```ts
   // OLD
   import { ActionButton } from '@dankupfer/dn-components';
   import { useTheme } from '@dankupfer/dn-components';

   // NEW
   import { ActionButton, useTheme } from '@dn/components';
   ```

3. **Update packages/journeys/src/index.ts** to export all journeys.

4. **Verify:**
   ```bash
   npm run typecheck
   npm run storybook
   npm run visualiser
   ```

### Phase 5: Add Stories

For each migrated component, add a colocated story if one doesn't already exist:

```
packages/components/src/MyComponent/
  index.tsx
  styles.ts
  MyComponent.stories.tsx    ← add this
```

Stories are automatically discovered by Storybook via the glob in `.storybook/main.ts`.

If Storybook doesn't pick up new stories:
```bash
rm -rf apps/storybook/node_modules/.cache/storybook
npm run storybook
```

## Common Migration Issues

### Import Path Changes

| Old Import | New Import |
|---|---|
| `from '@dankupfer/dn-tokens'` | `from '@dn/tokens'` |
| `from '@dankupfer/dn-components'` | `from '@dn/components'` |
| `from '../theme/ThemeProvider'` | `from '../ThemeProvider'` or `from '@dn/components'` |
| `from '../../../theme/tokenProcessor'` | `from '@dn/tokens'` |

### Missing Package Errors

When you see `Cannot find module 'expo-something'`:
1. Check if it's web-compatible or native-only
2. Install in the right place (see EXPO_PACKAGES_GUIDE.md)
3. Add as peerDependency in the package that uses it

### TypeScript Errors About Missing Types

If TS complains about types from @dn/tokens not being available:
- Ensure packages/components/src/index.ts re-exports the needed types
- Restart TS server in VS Code: Cmd+Shift+P → 'TypeScript: Restart TS Server'

### Metro Cache Issues

If Expo shows stale content after changes:
```bash
npm run visualiser -- --clear
```

### Storybook Cache Issues

If Storybook shows errors after adding/removing stories:
```bash
rm -rf apps/storybook/node_modules/.cache/storybook
```

### React Native Web Resolution in Storybook

If Storybook can't resolve react-native imports:
- Check `vite.config.ts` has the `react-native` → `react-native-web` alias
- Check `.storybook/main.ts` viteFinal also has the alias
- Check extensions list starts with `.web.tsx`

## Incremental Approach

**Do NOT try to migrate everything at once.** The recommended order:

1. Get skeleton working (Phase 1)
2. Migrate tokens + verify (Phase 2)
3. Migrate ONE simple component (e.g. ThemedText) + verify (Phase 3)
4. Migrate remaining components one by one
5. Migrate journeys (Phase 4)
6. Add stories (Phase 5)

After each component, verify with typecheck + storybook + visualiser. This way you catch issues early and know exactly which component caused the problem.

## When to Upgrade Expo SDK

Don't upgrade during migration. Once the monorepo is stable:

1. Update apps/visualiser: `cd apps/visualiser && npx expo install expo@latest`
2. Run `npx expo install --fix` to align all expo package versions
3. Test everything
4. Commit as a separate change