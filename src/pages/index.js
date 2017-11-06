import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi {data.allHomeJson.edges[0].node.foo}</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to='/page-2/'>Go to page 2</Link>
  </div>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allHomeJson {
      edges {
        node {
          foo
        }
      }
    }
  }
`
