module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: 'gb-ps-ud-jtc',
        path: '/',
        preview: false,
        pages: [
          {
            type: 'Page', // has to be a capital p for custom (page) types from prismic
            match: '/:uid', // sets the slug based on slug uid. /:uid references the prismic uid field, based on the API ID,
            path: '/', // can be used for nested slugs too
            component: require.resolve('./src/components/templates/page.js'),
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/star.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-brotli',
    },
    `gatsby-plugin-compression`,
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3000,
        production: true,
      },
    },
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ],
};
