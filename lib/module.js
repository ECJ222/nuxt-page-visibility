const { resolve } = require('path')

module.exports = function (moduleOptions) {
  this.addPlugin({
    src: resolve(__dirname, 'visibility.js'),
    ssr: false,
    fileName: 'visibility.js'
  })

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    ssr: false,
    fileName: 'page-visibility.js'
  })
}

module.exports.meta = require('../package.json')
