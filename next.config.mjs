// module.exports = withNextra({
//   distDir: 'dist',
//   //   assetPrefix,
//   //   basePath: assetPrefix,
// });

import nextra from 'nextra';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // mandatory, otherwise won't export
  },
};

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
});

export default withNextra(nextConfig);
