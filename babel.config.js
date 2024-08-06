module.exports = {
  presets: [
    ['module:@react-native/babel-preset', {jsxImportSource: 'nativewind'}],
    'nativewind/babel',
  ],
  plugins: [
    'babel-plugin-transform-typescript-metadata',
    [
      'module-resolver',
      {
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        root: ['./'],
        alias: {
          apis: './apis',
          components: './components',
          features: './features',
          hooks: './hooks',
          layouts: './layouts',
          types: './types',
          utils: './utils',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        blacklist: null, // DEPRECATED
        whitelist: null, // DEPRECATED
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
