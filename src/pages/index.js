import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { graphql, Link } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <p>
      I'm a mid-level software engineer. I believe in writing beautiful code, developing accessible solutions, and 
      giving back to the coding world.
    </p>
    {data.allMarkdownRemark.edges
      .sort((a, b) => dateStringComparer(a.node.frontmatter.date, b.node.frontmatter.date))
      .map(({ node }) => (
      <div key={node.id}>
        <Link
          to={node.fields.slug}
          style={{ color: `#222` }}
        >
          <h3>
            {node.frontmatter.title}<br />
          </h3>
        </Link>
        <p>
          {node.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: node.html }} />
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          html
        }
      }
    }
  }
`

export default IndexPage
function dateStringComparer(a, b) {
  return new Date(a) > new Date(b) ? -1 : 1;
}

