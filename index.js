var ejs = require('ejs')
var readFileAndCacheSync = require('read-file-and-cache').sync

module.exports = function (options) {
  return function ejsRenderMiddleware (req, res, next) {
    var opts = typeof options === 'function' ? options(req, res) : options

    // Cache forever if it's a production server, else check
    // for changes and always return fresh content
    var content = readFileAndCacheSync(opts.path, opts.cache || {
      never_update: process.env.NODE_ENV === 'production'
    })

    req.rendered = ejs.render(content, opts.data, opts.options)

    next()
  }
}
