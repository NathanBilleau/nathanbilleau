module.exports = {
  siteMetadata: {
    title: `Nathan Billeau`,
    description: `étudiant, autodidacte, développeur front-end`,
    author: `@nbilleau`,
    siteUrl: `https://nathanbilleau.fr`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Jost`,
              variants: [`300`, `700`],
            },
          ],
        },
      },
    },
  ],
}
