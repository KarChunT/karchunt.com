// import { createMDX } from 'fumadocs-mdx/next';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { createMDX } = require('fumadocs-mdx/next');

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  // reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
  distDir: 'dist',
};

module.exports = withMDX(config);

// export default withMDX(config);
