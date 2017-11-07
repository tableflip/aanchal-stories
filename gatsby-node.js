const Path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return Promise.all([
    createStoryPages(graphql, createPage)
  ])
}

function createStoryPages (graphql, createPage) {
  return graphql(`
    {
      stories: allContent(filter: {page: { regex: "/^story-.*/" }}) {
        edges {
          node {
            page
          }
        }
      }
    }
  `).then(({ data }) => {
    data.stories.edges.forEach(({ node }) => {
      createPage({
        path: node.page,
        component: Path.join(__dirname, 'src', 'templates', 'story.js'),
        context: {
          // Data passed to context is available in page queries as GraphQL variables.
          page: node.page
        }
      })
    })
  })
}
