module.exports = {
  siteMetadata: {
    title: `Italo Góis`,
    description: `Esse é o site de um desenvolvedor frontend`,
    author: `@italogois_`,
    siteUrl: `https://www.italogois.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Italo Góis`,
        short_name: `Italo Góis`,
        start_url: `/`,
        background_color: `#f25c05`,
        theme_color: `#f25c05`,
        display: `minimal-ui`,
        icon: `src/images/italo-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-167954928-1',
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `italogois`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `italogois.com`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `orange`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    `gatsby-plugin-offline`,
  ],
}
