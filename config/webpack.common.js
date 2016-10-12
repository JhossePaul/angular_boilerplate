const webpack = require('webpack');
const helpers = require('./helpers');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');

const HMR = helpers.hasProcessFlag('hot');
const METADATA = {
  title: 'Generic Angular Boilerplate',
  baseUrl: '/',
  isDevServer: helpers.isWebpackDevServer()
};

module.exports = function (options) {
  isProd = options.env === 'production';
  return {
    metadata: METADATA,
    entry: {
      'polyfills': './src/polyfills.browser.js',
      'vendor':    './src/vendor.browser.js',
      'main':      './src/main.browser.js'
    },
    resolve: {
      extensions: ['', '.js', '.json'],
      root: helpers.root('src'),
      modulesDirectories: ['node_modules']
    },
    module: {
      preLoaders: [
        {
          test: /\.js$/,
          loader: 'eslint',
          exclude: /node_modules/
        }
      ],

      loaders: [
        {
          test: /\.js$/,
          loader: 'ng-annotate!babel',
          exclude: [/app\/lib/, /node_modules/]
        },
        {
          test: /\.css$/,
          // loaders: ['to-string-loader', 'css-loader']
          // loader: 'style!css'
          loader: 'raw'
        },
        {
          test: /\.html$/,
          loader: 'raw',
          exclude: [helpers.root('src/index.html')]
        },
        {
          test: /\.(jpg|png|gif)$/,
          loader: 'file'
        },
        {
          test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader'
        },
        {
          test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [
      new AssetsPlugin({
        path: helpers.root('dist'),
        filename: 'webpack-assets.json',
        prettyPrint: true
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: ['polyfills', 'vendor'].reverse()
      }),
      new CopyWebpackPlugin([{
        from: 'src/assets',
        to: 'assets'
      }]),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        chunksSortMode: 'dependency'
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.jquery': 'jquery'
      })
    ],
    node: {
      global: 'window',
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  };
};
