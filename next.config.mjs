import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'export',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
  // distDir: 'dist',
};

export default withMDX(config);
