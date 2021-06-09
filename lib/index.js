const { resolve } = require('path')

module.exports = function (moduleOptions) {
  this.addPlugin({
    src: resolve(__dirname, 'visibility.js'),
    fileName: 'visibility.js'
  })

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'page-visibility.js'
  })
}

module.exports.meta = require('../package.json')
