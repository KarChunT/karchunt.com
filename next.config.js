// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
});

module.exports = withNextra({
  /* other next.js config */
  images: {
    unoptimized: true,
  },
  output: 'export',
  distDir: 'dist',
  //   assetPrefix,
  //   basePath: assetPrefix,
});
