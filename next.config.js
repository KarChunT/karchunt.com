/** @type {import('next').NextConfig} */

let nextConfig = {}
const isProduction = process.env.PRODUCTION || false;

if (isProduction === "true") {
  const repository = process.env.REPOSITORY;
  nextConfig = {
    output: "export",
    distDir: "dist",
    basePath: `/${repository}`,
    assetPrefix: `/${repository}/`,
    eslint: {
      ignoreDuringBuilds: true,
    },
    // images: {
    //   unoptimized: true,
    // }
  }
}

const { withContentlayer } = require("next-contentlayer");
module.exports = withContentlayer({ ...nextConfig });
