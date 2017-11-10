# Aanchal Stories

Stories from Aanchal Women's Aid

## Usage

Install dependencies

```sh
npm install
```

###### Dev mode

Clean, build, serve and watch

```sh
npm start
```

###### Production

Build out static site to `dist`

```sh
npm run build
```

## Build process

Find the facts.json and the content.json for each page.
These become the props passed to each page, and looks like this:

```json
{
  "facts": {
    "title": "Aanchal Women's Aid",
    "description": "Stories from Aanchal Women's Aid",
    "keywords": ""
  },
  "pages": {
    "call-back": {
      "content": {
        "meta": {
          "name": "call-back",
          "relativePathToRoot": ".."
        },
        "pageTitle": "Request a Call back"
      }
    },
    "call-back-ok": {
      "content": {
        "meta": {
          "name": "call-back-ok",
          "relativePathToRoot": ".."
        },
        "pageTitle": "Request a Call back"
      }
    },
    "home": {
      "content": {
        "meta": {
          "name": "home",
          "relativePathToRoot": "."
        },
        "pageTitle": "Home - Aanchal Women's Aid"
      }
    }
  }
}
```
Run `npm start` and check `build/data.json` to see the full data available.

Each folder in the `pages` dir with a `content.json` becomes a key in the `pages` prop.

These are the props that are passed to every page, along with the key for the current page.

## Writing pages

Create a new dir in `pages` with an `index.js` and a `content.json`

Your `index.js` should have a default export of a React `Component`-ish object.


```js
import React from 'react'
import Layout from '../layout'

const AboutUsPage = ({content, facts, pages}) => (
  <Layout content={content} facts={facts}>
    <h1>{content.header}</h1>
  </Layout>
)

export default AboutUsPage
```

Your page will be passed the following props

- `facts` containing the project `facts.json`
- `content` containing the local `content.json`
- `pages` containing all the data from all pages.

`pages` is provided to create indexes over other pages. For example:

```js
const IndexPageContainer = ({pages, ...props}) => {
  const stories = Object.keys(pages)
    .filter(key => key.match(/story/))
    .map(key => pages[key].content)
  return <IndexPage {...props} stories={stories} />
}

export default IndexPageContainer
```

...here the container finds all the story pages, and makes them available as the `stories` prop.
