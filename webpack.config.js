const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

const MODE = process.env.NODE_ENV_MODE || 'development';

const common = {
  mode: MODE,
  entry: {
    index: './src/index.tsx',
  },
  output: {
    publicPath: '/',
    clean: true,
    path: path.resolve('./build'),
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/chunk.[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png|svg|gif)/i,
        type: 'asset',
      },
      {
        test: /\.(tsx|ts)?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
};

const config = {
  development: {
    ...common,
    devtool: 'eval',
    devServer: {
      host: '127.0.0.1',
      port: 9000,
      client: {
        overlay: true,
        logging: 'error',
      },
      hot: true,
      historyApiFallback: true,
      open: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        templateParameters: {
          mode: ' (개발용)',
        },
        filename: './index.html',
      }),
      new ReactRefreshPlugin(),
    ]
  },
  production: {
    ...common,
    devtool: false,
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      minimize: true,
    },
    plugins: [
      new webpack.DefinePlugin({
        process: {
          env: {
            NODE_ENV_API: JSON.stringify('https://buildserver:9991/'),
          },
        },
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        templateParameters: {
          mode: '',
        },
        filename: './index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].css',
      }),
      new CopyPlugin({
        patterns: [
          { from: path.resolve(__dirname, 'public/site.webmanifest') },
          { from: path.resolve(__dirname, 'public/favicon'), to: './favicon' }
        ]
      })
    ],
  },
};

module.exports = config[MODE];