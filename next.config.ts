import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  latex: true,
});

export default withNextra({
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // mandatory, otherwise won't export
  },
  distDir: 'dist',
  eslint: {
    // ESLint behaves weirdly in this monorepo.
    ignoreDuringBuilds: true
  },
});
