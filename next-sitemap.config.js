/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://karchunt.com',
  generateRobotsTxt: true,
  outDir: 'dist',
};
