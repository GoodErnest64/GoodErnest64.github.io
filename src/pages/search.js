import * as React from "react";
import Layout from "./components/layout";
import { graphql } from 'gatsby'
import { useState } from "react";
import Card from "./components/card";

function check_existing(s, sq) {
  return s.toLowerCase().includes(sq.toLowerCase())
}

function check_existing_array(a, sq) {
  for (let i = 0; i < a.length; i++) {
    if (check_existing(a[i], sq)) {
      return true
    }
  }
  return false
}

const Search = ({ data }) => {
  function a(e) {
    setSearchq(e.target.value)
    e.preventDefault()
    let r = data.allMdx.nodes.filter((node) => check_existing(node.frontmatter.title, searchq) || check_existing(node.excerpt, searchq) || check_existing_array(node.frontmatter.tags.split(" "), searchq))
    setResults(r)
    console.log(r)
  }

  function getdir(s) {
    if (s === "project") {
      return "projects"
    } else {
      return s
    }
  }

  const [searchq, setSearchq] = useState("");
  const [results, setResults] = useState(data.allMdx.nodes);

  return (
    <Layout>
      <form className="flex w-full items-center justify-center" onSubmit={a}>
        <input onChange={(e) => a(e)} className="dark:bg-slate-500 ring-1 ring-gray-500 p-2 text-xl rounded-2xl m-3 h-12 md:w-1/2 w-3/4" type="text"></input>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 dark:stroke-white transition-all duration-300 stroke-1 hover:stroke-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
      </form>
      <div className="flex flex-col w-full justify-center items-center">
        {
          results.map(node =>
          (
            <div className="md:w-1/2 w-11/12">
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
          )
          )
        }
      </div>
    </Layout>
  );
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
        type
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

export default Search