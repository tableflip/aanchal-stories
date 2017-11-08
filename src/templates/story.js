import React from 'react'
import ResponsiveEmbed from 'react-responsive-embed'

export default ({ data }) => (
  <div>
    <div className='mw8 center ph2 pb3'>
      <ResponsiveEmbed src={data.story.videoSrc} />
    </div>
    <h1 className='f3 fw4 mw8 center ph1'>{data.story.name}</h1>
  </div>
)

export const query = graphql`
  query StoryQuery($page: String!) {
    story: content(page: { eq: $page }) {
      name
      videoSrc
    }
  }
`
