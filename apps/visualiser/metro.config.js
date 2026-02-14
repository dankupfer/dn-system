// apps/visualiser/metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// Watch all packages in the monorepo
config.watchFolders = [monorepoRoot];

// Ensure Metro resolves modules from both the app and the monorepo root
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

// Add woff2 as a recognised asset extension
config.resolver.assetExts = [...(config.resolver.assetExts || []), 'woff2'];

// Ensure only one copy of react/react-native
config.resolver.disableHierarchicalLookup = true;

module.exports = config;
