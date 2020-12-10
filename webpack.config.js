const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './dist/index.js',
  mode: 'production',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js'
  },
  externals: [ nodeExternals() ]
}