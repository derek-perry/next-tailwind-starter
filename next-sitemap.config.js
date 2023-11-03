/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://nexttailwindstarter.netlify.app',
  outDir: 'out',
  changefreq: 'weekly',
  generateRobotsTxt: true,
  autoLastmod: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/*.json$',
          '/*_buildManifest.js$',
          '/*_middlewareManifest.js$',
          '/*_ssgManifest.js$',
          '/*.js$'
        ]
      }
    ]
  }
}