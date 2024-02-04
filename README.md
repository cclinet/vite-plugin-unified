# vite-plugin-unified-compiler

Complie raw file using [unified.js](https://unifiedjs.com).

## Usage
```js
// vite.config.js / vite.config.ts
import { unifiedPlugin } from 'vite-plugin-unified-compiler'

export default {
  plugins: [
    unifiedPlugin() // default behavior is to compile all md file to html document.
  ]
}
```

## Config
fileRegex: a RegExp object of file name
processor: an unified processor like `unified().use(remarkParse).use(remarkRehype).use(rehypeStringify)` 

```js
// vite.config.js / vite.config.ts
import { unifiedPlugin } from 'vite-plugin-unified-compiler'


import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'

const customProcessor = unified().use(remarkParse).use(remarkRehype).use(rehypeStringify)

export default {
  plugins: [
    unifiedPlugin({fileRegex: new Regex(/.*?.md\?raw/)}),
    processor: customProcessor
  ]
}
```