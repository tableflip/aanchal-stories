require('babel-register')()

const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const { createElement } = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const requireDirectory = require('require-directory')
const { Helmet } = require('react-helmet')

console.time('Build html total')

const outputDir = path.resolve(__dirname, '../dist')
const data = require('./data')()

requireDirectory(module, '../pages', {
  include: /index.js$/,
  visit: (content, filePath) => {
    // fileDir: '/Users/oli/Code/tableflip/aanchal-stories/pages/story-4'
    const pageDir = path.dirname(filePath)
    // name: story-4
    const name = path.basename(pageDir)

    console.time(`Build ${name}`)

    const props = {
      content: data.pages[name].content,
      facts: data.facts,
      pages: data.pages
    }
    const Component = require(filePath).default

    const appHtml = renderToStaticMarkup(createElement(Component, props))
    const helmet = Helmet.renderStatic()
    const docHtml = `<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
  <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
  </head>
  <body ${helmet.bodyAttributes.toString()}>
    <div id="react-root">
      ${appHtml}
    </div>
  </body>
</html>`

    const subdir = name === 'home' ? '.' : name
    const outFile = path.join(outputDir, subdir, 'index.html')
    mkdirp.sync(path.dirname(outFile))
    fs.writeFileSync(outFile, docHtml)
    console.timeEnd(`Build ${name}`)
  }
})

console.timeEnd('Build html total')

fs.writeFileSync(
  path.join(__dirname, 'data.json'),
  JSON.stringify(data, null, 2)
)
