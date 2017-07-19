# extract-svg-viewbox

[![Build Status](https://travis-ci.org/lukem512/extract-svg-viewbox.svg?branch=master)](https://travis-ci.org/lukem512/extract-svg-viewbox) ![Build Status](https://david-dm.org/lukem512/extract-svg-viewbox.svg) [![npm](https://img.shields.io/npm/l/extract-svg-viewbox.svg)](https://www.npmjs.com/package/extract-svg-viewbox) [![npm](https://img.shields.io/npm/v/extract-svg-viewbox.svg)](https://www.npmjs.com/package/extract-svg-viewbox) [![npm](https://img.shields.io/npm/dm/extract-svg-viewbox.svg)](https://www.npmjs.com/package/extract-svg-viewbox)

Extracts the viewBox information from an SVG string.

## Install

```
npm i --save extract-svg-viewbox
```

## Usage

```js
const extract = require('extract-svg-viewbox')

const svg = `<svg viewBox="0 0 460 460" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M7.121 178.853c-5.07 14.157-.924 28.755 11.058 38.49l84.783 67.251c1.845 1.327 2.303 3.541 1.845 5.751l-25.803 101.319c-3.227 10.616-.922 21.676 5.988 30.086 6.912 8.846 17.97 14.157 29.03 14.157 6.91 0 13.823-2.212 19.351-5.753l92.618-55.304c1.843-.883 4.147-.883 5.99 0l93.537 55.304c5.99 3.982 12.902 5.753 19.813 5.753 10.598 0 21.199-4.867 28.11-13.274 6.91-8.406 9.674-19.466 7.371-30.528l-25.803-101.761c-.46-2.212.46-4.424 1.843-5.751l85.245-67.693c11.52-9.735 15.666-24.331 11.06-38.49-5.072-13.719-17.512-23.008-32.257-23.894l-109.666-7.521c-2.301 0-4.146-1.329-5.066-3.539l-41.931-97.335c-5.992-13.719-18.894-22.123-34.098-22.123-15.207 0-28.57 8.404-34.098 22.123l-41.932 97.775c-.922 1.77-2.763 3.099-5.068 3.541l-109.206 7.079c-14.743.885-27.646 10.175-32.713 24.335z" fill="transparent" />
</svg>`

const viewBox = extract(svg)
console.log(viewBox) // "0 0 460 460"
```

## Related Modules

[normalize-svg-coords](https://github.com/lukem512/normalize-svg-coords)

## License

MIT © Luke Mitchell
