import * as React from "react"
import Layout from "./components/layout"
import Card from "./components/card"
import { graphql } from 'gatsby'

function check_existing(s, sq) {
  return s.toLowerCase().includes(sq.toLowerCase())
}

function getdir(s) {
  if (s === "project") {
    return "projects"
  } else {
    return s
  }
}

function check_existing_array(a, sq) {
  for (let i = 0; i < a.length; i++) {
    if (check_existing(a[i], sq)) {
      return true
    }
  }
  return false
}

const IndexPage = ({ data }) => {

  const featured = data.allMdx.nodes.filter(
    (node) => check_existing_array(node.frontmatter.tags.split(" "), "featured")
  )
  const python = data.allMdx.nodes.filter(
    (node) => check_existing_array(node.frontmatter.tags.split(" "), "python")
  )
  const hacking = data.allMdx.nodes.filter(
    (node) => check_existing_array(node.frontmatter.tags.split(" "), "hack")
  )
  const web = data.allMdx.nodes.filter(
    (node) => check_existing_array(node.frontmatter.tags.split(" "), "web")
  )

  return (
    <Layout>
      <div className="">
        <h1 className="md:text-6xl pt-3 text-3xl w-full text-center font-extrabold">Welcome To My Blog !</h1>
        <p className="text-xl font-bold py-4 w-full text-center md:px-96">In Here You Are Gonna Find Blog Posts And Projects About Programming, Python, Artificial Intelligence, Hacking, Penetration Testing, Web Development, Gaming And A Bit Of My Personal Life !</p>
        {/* ########################################################################## */}
        <div className="basis-1/2 h-full">
          <h1 className="md:text-6xl text-3xl font-extrabold px-5 pt-3">Recent Posts :</h1>
          <div className="md:px-12 px-3 py-3 flex flex-col md:flex-row md:gap-4">
            {
              data.allMdx.nodes.slice(0, 3).map((node) => (
                <div className="">
                  <Card
                    id={node.id}
                    link={getdir(node.frontmatter.type)}
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
          </div>
          <div className="h-8"></div>
        </div>
        {/* ########################################################################## */}
        {featured.length > 0 ? (
          <div className="basis-1/2 h-full">
            <h1 className="md:text-6xl text-3xl font-extrabold px-5 pt-3">Featured Posts :</h1>
            <div className="md:px-12 px-3 py-3 flex flex-col md:flex-row md:gap-4">
              {
                featured.slice(0, 3).map((node) => (
                  <div className="">
                    <Card
                      id={node.id}
                      link={getdir(node.frontmatter.type)}
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
            </div>
            <div className="h-8"></div>
          </div>
        ) : (<div></div>)
        }
        {/* ########################################################################## */}
        {hacking.length > 0 ? (
          <div className="basis-1/2 h-full">
            <h1 className="md:text-6xl text-3xl font-extrabold px-5 pt-3">Hacking Posts :</h1>
            <div className="md:px-12 px-3 py-3 flex flex-col md:flex-row md:gap-4">
              {
                hacking.slice(0, 3).map((node) => (
                  <div className="">
                    <Card
                      id={node.id}
                      link={getdir(node.frontmatter.type)}
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
            </div>
            <div className="h-8"></div>
          </div>
        ) : (<div></div>)
        }
        {/* ########################################################################## */}
        {web.length > 0 ? (
          <div className="basis-1/2 h-full">
            <h1 className="md:text-6xl text-3xl font-extrabold px-5 pt-3">Web Posts :</h1>
            <div className="md:px-12 px-3 py-3 flex flex-col md:flex-row md:gap-4">
              {
                web.slice(0, 3).map((node) => (
                  <div className="">
                    <Card
                      id={node.id}
                      link={getdir(node.frontmatter.type)}
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
            </div>
            <div className="h-8"></div>
          </div>
        ) : (<div></div>)
        }
        {/* ########################################################################## */}
        {python.length > 0 ? (
          <div className="basis-1/2 h-full">
            <h1 className="md:text-6xl text-3xl font-extrabold px-5 pt-3">Python Posts :</h1>
            <div className="md:px-12 px-3 py-3 flex flex-col md:flex-row md:gap-4">
              {
                python.slice(0, 3).map((node) => (
                  <div className="">
                    <Card
                      id={node.id}
                      link={getdir(node.frontmatter.type)}
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
            </div>
            <div className="h-8"></div>
          </div>
        ) : (<div></div>)
        }
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
  allMdx(
    sort: {frontmatter: {date: DESC}}
  ) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        slug
        tags
        type
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

export default IndexPage

export const Head = () => <title>Home Page</title>
