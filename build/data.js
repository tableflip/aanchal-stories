const path = require('path')
const requireDirectory = require('require-directory')

/*
 * Find the facts and content and meta data
 */
module.exports = function assembleData () {
  console.time('Build data total')
  const rootPath = path.resolve(__dirname, '../pages')
  const facts = require('../facts.json')
  const pages = requireDirectory(module, '../pages', {
    include: /content.json$/,
    visit: (content, filePath) => {
      // fileDir: '/Users/oli/Code/tableflip/aanchal-stories/pages/story-4'
      const pageDir = path.dirname(filePath)
      // name: story-4
      const name = path.basename(pageDir)
      // relativePath: '..'
      const relativePath = path.relative(pageDir, rootPath) || '.'
      const meta = {
        name,
        relativePathToRoot: name === 'home' ? '.' : relativePath
      }
      return {
        meta,
        ...content
      }
    }
  })
  console.timeEnd('Build data total')
  return {
    facts,
    pages
  }
}
