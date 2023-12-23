/** @type {import('next').NextConfig} */

const isProduction = process.env.GITHUB_ACTIONS || "false";
const isDomainSetup = process.env.NEXT_PUBLIC_HAS_DOMAIN || "false";

if (isProduction === "false") {
  process.env.NEXT_PUBLIC_BASE_PATH = "";
  process.env.NEXT_PUBLIC_ASSET_PREFIX = "";
}

const nextConfig = {
  output: isProduction ? "export" : undefined,
  distDir: "dist",
  basePath: isProduction
    ? isDomainSetup
      ? ""
      : process.env.NEXT_PUBLIC_BASE_PATH
    : "",
  assetPrefix: isProduction
    ? isDomainSetup
      ? ""
      : process.env.NEXT_PUBLIC_ASSET_PREFIX
    : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: !!isProduction,
  },
};

const { withContentlayer } = require("next-contentlayer");
module.exports = withContentlayer({ ...nextConfig });
