import React from 'react'

export default ({ data }) => <div>{data.story.name}</div>

export const query = graphql`
  query StoryQuery($page: String!) {
    story: content(page: { eq: $page }) {
      id
      name
    }
  }
`
