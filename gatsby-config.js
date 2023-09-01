/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Palette`,
    siteUrl: `https://www.yourdomain.tld`,
    description: "Creative dev & design technologist based in Brooklyn, NY",
    image: "",
    twitterUsername: ''
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: 'gatsby-source-contentful',
    //   options: {
    //     "accessToken": "wOmkQspKFshMmOyJxSoizRkqucJ4yv1UCYBjHTV4zcQ",
    //     "spaceId": ""
    //   }
    // }, 
    "gatsby-plugin-image", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    "gatsby-plugin-sass", 
    // "gatsby-plugin-google-gtag", 
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en-US'
      }
    },
    "gatsby-plugin-sitemap",  
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Palette`,
        short_name: `Palette`,
        start_url: `/`,
        icon: `src/images/favicon/favicon-32x32.png`,
      },
    },
  ]
};