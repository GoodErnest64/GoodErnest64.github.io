/**
 * @type {import('gatsby').GatsbyConfig}
 "gatsby-plugin-mdx",*/
module.exports = {
  siteMetadata: {
    title: `Ge64`,
    siteUrl: `https://goodernest64.github.io`,
    description:
      "My Personal Blog Where I Post About Programming And Hacking !",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-transformer-remark",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-2QSK51PR1H", // Google Analytics / GA
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true
        },
      },
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            title: "My Personal Blog RSS Feed",
            output: "rss.xml",
            query: `
            {
  allMdx(sort: {frontmatter: {date: ASC}}) {
    nodes {
      frontmatter {
        title
        date
        slug
        type
      }
      excerpt
    }
  }
}
            `,
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  url: `${site.siteMetadata.siteUrl}/${node.frontmatter.type}/${node.frontmatter.slug}`,
                  description: node.excerpt,
                  guid: `${site.siteMetadata.siteUrl}/${node.frontmatter.type}/${node.frontmatter.slug}`,
                })
              })
            },
          }
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}\\blog`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}\\projects`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-2QSK51PR1H", // Google Analytics / GA
        ],
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true
        },
      },
    }
  ]
};