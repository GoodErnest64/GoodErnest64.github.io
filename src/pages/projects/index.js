import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Card from '../components/card'

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <div className="flex flex-col w-full justify-center items-center">
        {
          data.allMdx.nodes.map(node => (
            <div className='md:w-1/2 w-11/12'>
              <Card
                id={node.id}
                link="projects"
                slug={node.frontmatter.slug}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                excerpt={node.excerpt}
                tags={node.frontmatter.tags}
                hero_image={node.frontmatter.hero_image}
                hero_image_alt={node.frontmatter.hero_image_alt}
              />
            </div>
          ))
        }
      </div >
    </Layout>
  )
}

export const query = graphql`
  query {
  allMdx(
    sort: {frontmatter: {date: DESC}}
    filter: {frontmatter: {type: {eq: "projects"}}}
  ) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        slug
        tags
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
      excerpt
    }
  }
}
`

export const Head = () => <Seo title="My Projects" />

export default BlogPage