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

---

## Notes

`styled-component` is nice, but we can't really use is as it compiles to inline styles with it's own impl of autoprefixer that only goes down to IE11 without extra work.

`ccs-modules` is ok. It's got a clunky syntax for [variables][css-modules-vars], but it's integrated into gatsby by default along with regular `autoprefixer` which can be configured via the `browserlist` in [`package.json`](./package.json)




[css-modules-vars]: https://github.com/css-modules/css-modules/blob/master/docs/values-variables.md

TABS build me1
