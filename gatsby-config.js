module.exports = {
  siteMetadata: {
    title: `Michael Crenshaw, software engineer`,
    description: `Michael Crenshaw is a software engineer who believes in elegant code.`,
    author: `@m4c9416`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michael Crenshaw`,
        short_name: `crenshaw.dev`,
        start_url: `/`,
        background_color: `#ddd`,
        theme_color: `#222`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
