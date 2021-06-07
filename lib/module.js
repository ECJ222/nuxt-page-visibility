/* eslint-disable require-await */

const { resolve } = require('path')

module.exports = async function (moduleOptions) {
  const options = {
    ...this.options['@nuxt/page-visibility'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: '@nuxt/page-visibility.js',
    options
  })
}

module.exports.meta = require('../package.json')
