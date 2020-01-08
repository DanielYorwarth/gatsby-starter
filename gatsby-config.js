/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Page Starter",
    description: "this is the desc",
    keywords: "Keyword 1, Keyword 2",
    image: "./static/tony.jpg",
    url: "https://pagecreative.co.uk"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    { resolve: `gatsby-transformer-remark` },
    { 
      resolve: `gatsby-source-wordpress`, 
      options: {
        baseUrl: `http://pagedev.co.uk/clients/gatsby-cms`,
        protocol: `http`,
        hostingWPCOM: false,
      }
    },
    { resolve: `gatsby-plugin-react-helmet` }
  ]
}
