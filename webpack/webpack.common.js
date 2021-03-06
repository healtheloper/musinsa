/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

const path = require('path');

const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const webpack = require('webpack');

dotenv.config();

const getPublicUrl = () => {
  const envPublicUrl = process.env.PUBLIC_URL;
  if (envPublicUrl) {
    return envPublicUrl.endsWith('/') ? envPublicUrl : `${envPublicUrl}/`;
  }
  const { homepage } = require('../package.json');
  if (homepage) {
    return homepage.endsWith('/') ? homepage : `${homepage}/`;
  }
  return '/';
};

const API_URL = {
  DEV: 'http://localhost:3000',
  // TODO: Prod API url
  PROD: '',
};

process.env = { ...process.env, PUBLIC_URL: getPublicUrl() };

module.exports = {
  entry: {
    app: path.join(__dirname, '..', 'src', 'index.tsx'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, '..', 'src/components'),
      '@constants': path.resolve(__dirname, '..', 'src/constants'),
      '@styles': path.resolve(__dirname, '..', 'src/styles'),
      '@icons': path.resolve(__dirname, '..', 'src/icons'),
      '@contexts': path.resolve(__dirname, '..', 'src/contexts'),
      '@hooks': path.resolve(__dirname, '..', 'src/hooks'),
      '@common': path.resolve(__dirname, '..', 'src/common'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: [
          'babel-loader',
          {
            loader: 'string-replace-loader',
            options: {
              multiple: [
                {
                  search: '__API_END_POINT__',
                  replace:
                    process.env.NODE_ENV === 'development'
                      ? API_URL.DEV
                      : API_URL.PROD,
                  flags: 'g',
                },
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin(Object.keys(process.env)),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'public', 'index.html'),
      base: '/',
      favicon: path.resolve(__dirname, '..', 'public', 'favicon.ico'),
    }),
    new InterpolateHtmlPlugin(process.env),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../build'),
  },
};
