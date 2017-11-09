require('babel-register')()

const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const { createElement } = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const requireDirectory = require('require-directory')

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
    const html = renderToStaticMarkup(createElement(Component, props))
    const subdir = name === 'home' ? '.' : name
    const outFile = path.join(outputDir, subdir, 'index.html')
    mkdirp(path.dirname(outFile), (err, res) => {
      if (err) throw err
      fs.writeFileSync(outFile, html)
      console.timeEnd(`Build ${name}`)
    })
  }
})

console.timeEnd('Build html total')

fs.writeFileSync(
  path.join(__dirname, 'data.json'),
  JSON.stringify(data, null, 2)
)
