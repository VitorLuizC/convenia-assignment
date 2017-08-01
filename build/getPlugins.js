const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Obtém os plugins do bundler para o ambiente definido em --env.
 * @param {('development'|'production')} env
 * @returns {Array.<webpack.Plugin>}
 */
function getPlugins(env) {
  const plugins = [
    new HtmlPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html')
    }),
    new ExtractTextPlugin({
      filename: 'css/style.css',
      allChunks: true
    })
  ]

  if (env !== 'development') {
    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': '\'production\''
        }
      }),
      new webpack.optimize.UglifyJsPlugin()
    )
  }

  return plugins;
}

module.exports = getPlugins;
