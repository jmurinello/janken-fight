const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve('./src/index.js'),
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  resolve: {
    alias: {
      lib: path.resolve(__dirname, './src/lib/'),
      utils: path.resolve(__dirname, './src/utils/')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
}
