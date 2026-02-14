# Managing Expo Packages in the DN Monorepo

## The Problem

Some components and journeys depend on Expo-specific packages (e.g. `expo-av`, `expo-linear-gradient`). These packages:
- Need native linking in the Expo app
- May not work in Storybook's Vite/web environment
- Should not force every consumer to install them

## Strategy

### Rule: Use `peerDependencies` for Expo packages

Expo packages should be declared as `peerDependencies` in the package that uses them, and installed as real `dependencies` only in `apps/visualiser`.

### Why?

- **npm hoisting**: npm workspaces hoists dependencies to the root. If `@dn/components` has `expo-av` as a direct dependency, it gets hoisted and every app resolves it - even Storybook, which can't use it.
- **Consumer choice**: When published, `peerDependencies` tell consumers 'you need to provide this' rather than forcing it.
- **Storybook compatibility**: Storybook can mock or skip components that need native-only packages.

## How to Add an Expo Package

### Example: Adding `expo-linear-gradient` to a component

#### Step 1: Install in the visualiser app

```bash
cd apps/visualiser && npx expo install expo-linear-gradient
```

This ensures the correct version for your Expo SDK.

#### Step 2: Add as peerDependency in the package

In `packages/components/package.json`:

```json
{
  "peerDependencies": {
    "react": "*",
    "react-native": "*",
    "expo-linear-gradient": "*"
  },
  "peerDependenciesMeta": {
    "expo-linear-gradient": {
      "optional": true
    }
  }
}
```

The `optional: true` means consumers that don't need this specific component won't get warnings.

#### Step 3: Use in your component

```tsx
// packages/components/src/GradientCard/index.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../ThemeProvider';

export const GradientCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();
  return (
    <LinearGradient
      colors={[theme.colors.action.background, theme.colors.brandAccent.background]}
      style={{ padding: theme.spacing.md, borderRadius: theme.borderRadius.button }}
    >
      {children}
    </LinearGradient>
  );
};
```

#### Step 4: Handle Storybook (web)

For packages that work on web (like `expo-linear-gradient`), add it to the Storybook app too:

```bash
cd apps/storybook && npm install expo-linear-gradient
```

Then add to `apps/storybook/vite.config.ts` if Vite needs help resolving it:

```ts
optimizeDeps: {
  include: ['expo-linear-gradient'],
},
```

### Example: Adding `expo-av` (native-only)

`expo-av` does NOT work on web, so Storybook needs a mock.

#### Step 1: Install in visualiser only

```bash
cd apps/visualiser && npx expo install expo-av
```

#### Step 2: Add as optional peerDependency

In `packages/components/package.json` (or whichever package uses it):

```json
{
  "peerDependenciesMeta": {
    "expo-av": {
      "optional": true
    }
  }
}
```

#### Step 3: Create platform-specific files

```
packages/components/src/AudioPlayer/
  index.tsx          # re-exports from native
  AudioPlayer.native.tsx   # real implementation using expo-av
  AudioPlayer.web.tsx      # web fallback / placeholder
```

**Native version** (`AudioPlayer.native.tsx`):
```tsx
import React from 'react';
import { View, Text } from 'react-native';
import { Audio } from 'expo-av';
// ... full native implementation
```

**Web version** (`AudioPlayer.web.tsx`):
```tsx
import React from 'react';
import { View, Text } from 'react-native';

export const AudioPlayer: React.FC = () => (
  <View style={{ padding: 16, backgroundColor: '#f0f0f0', borderRadius: 8 }}>
    <Text>AudioPlayer - native only (use device preview)</Text>
  </View>
);
```

This way:
- Metro picks `AudioPlayer.native.tsx` for the Expo app
- Vite picks `AudioPlayer.web.tsx` for Storybook
- No mocking needed, no build errors

#### Step 4: Storybook story

The story works normally - it renders the web version automatically:

```tsx
// AudioPlayer.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { AudioPlayer } from './index';

const meta: Meta<typeof AudioPlayer> = {
  title: 'Components/AudioPlayer',
  component: AudioPlayer,
};
export default meta;

export const Default: Story = {};
```

## Quick Reference

| Package | Works on Web? | Strategy |
|---------|--------------|----------|
| `expo-linear-gradient` | Yes | Install in both visualiser and storybook |
| `expo-font` | Yes | Already handled by `@dn/tokens` FontLoader |
| `expo-av` | No | Platform split: `.native.tsx` / `.web.tsx` |
| `expo-camera` | No | Platform split: `.native.tsx` / `.web.tsx` |
| `expo-haptics` | No | Platform split or silent no-op on web |
| `react-native-gesture-handler` | Partial | Install in both, may need Vite config |
| `react-native-reanimated` | Partial | Install in both, needs Vite plugin |

## Key Rules

1. **Always install Expo packages via `npx expo install`** in the visualiser app - this ensures SDK version compatibility
2. **Never add Expo packages as direct dependencies** in `packages/*` - always use `peerDependencies`
3. **Mark native-only packages as `optional: true`** in `peerDependenciesMeta`
4. **Use `.native.tsx` / `.web.tsx` splits** for components that depend on native-only packages
5. **Run `npm install` from root** after adding any new packages to sync workspaces