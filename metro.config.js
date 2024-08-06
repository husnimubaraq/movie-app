const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

const config = getDefaultConfig(__dirname, { isCSSEnabled: true });

module.exports = mergeConfig(withNativeWind(config, { input: './global.css' }));
