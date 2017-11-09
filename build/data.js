const fs = require('fs')
const path = require('path')
const requireDirectory = require('require-directory')

/*
 * Bundle the facts and content and meta, as `./data.json`
 */
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
    const relativePath = path.relative(pageDir, rootPath)
    const meta = {
      name,
      relativePathToRoot: name === 'home' ? '' : relativePath
    }
    console.log(meta)
    return {
      meta,
      ...content
    }
  }
})

fs.writeFileSync(
  path.join(__dirname, 'data.json'),
  JSON.stringify({pages, facts}, null, 2)
)
