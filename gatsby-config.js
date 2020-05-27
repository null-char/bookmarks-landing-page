module.exports = {
  siteMetadata: {
    title: `Bookmarks - a simple bookmark manager for browsers`,
    description: `Bookmarks provides a clean and simple interface to organize your favorite websites. Functionalities like search, shareable links and syncing between devices makes managing your bookmarks a breeze.`,
    author: `@nullchar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bookmarks - a simple bookmark manager`,
        short_name: `Bookmarks`,
        start_url: `/`,
        background_color: `#fdfdfd`,
        theme_color: `#5368df`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}