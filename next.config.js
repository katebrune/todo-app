/* eslint-disable @typescript-eslint/no-var-requires */
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
});

module.exports = withPlugins([[withBundleAnalyzer]], {
  distDir: '../../dist/ui',
});
