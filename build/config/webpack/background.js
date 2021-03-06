const path = require('path')
const webpack = require('webpack')
const env = require('../environment')

module.exports = {
  mode: env.name,
  entry: [
    './src/entry/background.js'
  ],
  output: {
    filename: 'background.js'
  },
  resolve: {
    alias: {
      '@sdk': path.resolve(process.cwd(), 'src/sdk'),
      '@modules': path.resolve(process.cwd(), 'src/modules')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'babel-preset-env' ]
          }
        },
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(png|jpg)$/,
        use: {
          loader: 'url-loader',
        },
        include: [
          path.resolve(process.cwd(), 'src/modules/replacer')
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV: JSON.stringify(env.appConfig)
    }),
  ],
  performance: {
    hints: false
  }
}
