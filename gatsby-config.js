module.exports = {
  siteMetadata: {
    title: `Italo Góis`,
    description: `Sou Ítalo Góis, um desenvolvedor front-end, nordestino que mora em
        Aracaju.`,
    author: `@italogois_`,
    siteUrl: `https://italogois.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/images/uploads`,
        name: `uploads`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 736 },
          },
          {
            resolve: `gatsby-remark-prismjs`,
          },
          `gatsby-remark-relative-images`,
        ],
      },
    },
    {
      resolve: 'gatsby-remark-copy-linked-files',
      options: {
        destinationDir: 'static/images/uploads/',
      },
    },
    `gatsby-plugin-netlify-cms`,
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
