const fs = require('fs')
const requireDirectory = require('require-directory')

const pages = requireDirectory(module, '../pages')
const facts = require('../facts.json')

fs.writeFileSync('pages.json', JSON.stringify({pages, facts}, null, 2))
