ejs-render-middleware
---

1. Renders ejs file right away and puts result to `req.rendered`.
2. When in production, constantly caches contents of ejs file(s), else checks for changes and always processes fresh version of it

## Usage

```js
const ejsRenderMiddleware = require('ejs-render-middleware')

app.use(ejsRenderMiddleware({
  path: '/path/to.ejs',
  data: {
    title: 'Page title',
    something: 'something'
  },
  options: { ... } // options for EJS compiler
}))
```

or pass it properties from `req` or `res`:

```js
const ejsRenderMiddleware = require('ejs-render-middleware')

app.use(ejsRenderMiddleware((req, res) => ({
  path: req.pathToEjs,
  data: {
    title: 'Page title',
    something: req.something
  },
  options: { ... } // options for EJS compiler
})))
```
