// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

// If you have other Next.js configurations, you can pass them as the parasmeter:
module.exports = withNextra({
  /* other next.js config */
});
