function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:image="http://google.com/schemas/sitemap-image/1.1" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd http://google.com/schemas/sitemap-image/1.1 http://google.com/schemas/sitemap-image/1.1/sitemap-image.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>http://example.com</loc>
      <lastmod>2023-03-14T04:20:00+00:00</lastmod>
      <image:image>
        <image:loc>http://example.com/images/banner.jpg</image:loc>
      </image:image>
    </url>
    <url>
      <loc>http://example.com/404</loc>
      <lastmod>2023-03-14T04:20:00+00:00</lastmod>
      <image:image>
        <image:loc>http://example.com/images/banner.jpg</image:loc>
      </image:image>
    </url>
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will Generate, Save, and Write the Sitemap
}

export async function getServerSideProps({ res }) {

  // "Generate" and Save the XML sitemap
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;