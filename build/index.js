const path = require('path');
const process = require('process');
const getRules = require('./getRules');
const getPlugins = require('./getPlugins');

/**
 * Obtém as configurações do bundler para o ambiente definido em --env.
 * @param {('development'|'production')} env
 * @returns {webpack.Configuration}
 */
function getConfiguration(env = 'development') {
  return {
    entry: {
      main: path.resolve(__dirname, '../src')
    },
    output: {
      filename: 'js/[name].js',
      path: path.resolve(__dirname, '../dist'),
      publicPath: '/'
    },
    resolve: {
      extensions: ['.vue', '.js', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js' // Esse alias é necessário ao configurar
                                      // um bundler pra Vue. Ele faz com que o
                                      // vue exporte um módulo do EcmaScript ao
                                      // invés do CommonJS.
      }
    },
    devtool: env === 'development' ? 'source-map' : false,
    devServer: {
      contentBase: path.join(__dirname, '../dist'),
      port: process.env.PORT || 9000,
      host: process.env.IP || '127.0.0.1',
      historyApiFallback: true
    },
    module: {
      rules: getRules(env)
    },
    plugins: getPlugins(env)
  }
}

module.exports = getConfiguration;
