# aanchal-stories

Stories from Aanchal Women's Aid

## Usage

```sh
npm install
```

###### Dev

```sh
npm run watch
```

###### Production

```sh
npm run build
```

## Build process

Find the facts.json and the content.json for each page.
These become the props passed to each page, and looks like this

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
        "pageTitle": "Request a Call back"
      }
    },
    "home": {
      "content": {
        "pageTitle": "Home - Aanchal Women's Aid"
      }
    },
    "story-1": {
      "content": {
        "name": "Laximi",
        "intro": "Laximi talks about calling Aanchal and what happend next",
        "photoSrc": "http://aanchal.matsondigital.com/wp-content/uploads/2015/11/slider_image02.jpg",
        "videoSrc": "https://www.youtube.com/embed/OOdPLr4zyNU"
      }
    }
  }
}
```

Each folder in the `pages` dir with a `content.json` becomes a key in the `pages` prop.

These are the props that are passed to every page, along with the key for the current page.

```jsx
const {meta, facts, pages, name} = loadData('callback')
<CallbackPage meta={meta} facts={facts} pages={pages} name={name} />
```
---

## Notes

`styled-component` is nice, but we can't really use is as it compiles to inline styles with it's own impl of autoprefixer that only goes down to IE11 without extra work.

`ccs-modules` is ok. It's got a clunky syntax for [variables][css-modules-vars], but it's integrated into gatsby by default along with regular `autoprefixer` which can be configured via the `browserlist` in [`package.json`](./package.json)




[css-modules-vars]: https://github.com/css-modules/css-modules/blob/master/docs/values-variables.md
