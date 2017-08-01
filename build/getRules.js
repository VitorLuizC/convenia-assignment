const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Obtém as regras do bundler para o ambiente definido em --env.
 * @param {('development'|'production')} env
 * @returns {Array.<webpack.Rule>}
 */
function getRules(env) {
  const styleLoaders = [
    {
      loader: 'css-loader',
      options: {
        sourceMap: env === 'development',
        minimize: env === 'development' ? false : {
          autoprefixer: false
        }
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        sourceMap: env === 'development',
        plugins() {
          return [
            autoprefixer({
              browsers: ['ie > 8', 'last 4 versions']
            })
          ]
        }
      }
    },
    {
      loader: 'stylus-loader',
      options: {
        sourceMap: env === 'development'
      }
    }
  ]

  return [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    {
      test: /\.vue$/,
      exclude: /node_modules/,
      use: {
        loader: 'vue-loader',
        options: {
          loaders: {
            stylus: ExtractTextPlugin.extract({
              publicPath: '../',
              use: styleLoaders,
              fallback: 'vue-style-loader'
            })
          }
        }
      }
    },
    {
      test: /\.woff2?$/,
      use: {
        loader: 'file-loader',
        options: {
          name: 'font/[name].[ext]'
        }
      }
    }
  ]
}

module.exports = getRules;
