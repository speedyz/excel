const path = require('path')
module.exports = {
  context: path.resolve(__dirname, 'scr'),
  mode: 'development',
  entry: `./index.js`,
  output: {
    filename: `bundle.js`,
    path: path.resolve(__dirname, 'dist')
  }
}
