const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    buffer: require.resolve('buffer/'),
    stream: require.resolve('stream-browserify'),
    crypto: require.resolve('crypto-browserify'),
    zlib: require.resolve('browserify-zlib'),
    process: require.resolve('process/browser'),
  })
);
