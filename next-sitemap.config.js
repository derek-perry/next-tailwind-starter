/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://nexttailwindstarter.netlify.app',
  changefreq: 'weekly',
  generateRobotsTxt: true,
  autoLastmod: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      }
    ]
  }
}