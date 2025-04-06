const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const rootPath = process.cwd();

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  const config = {
    entry: path.resolve(rootPath, 'src/index.tsx'),
    output: {
      filename: isProd ? '[name].[chunkhash:8].js' : '[name].[fullhash:8].js',
      path: path.resolve(rootPath, 'build'),
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js','.css'],
      modules: [path.resolve(rootPath, 'src'), 'node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.(t|j)sx?$/,
          use: {
            loader: 'babel-loader',
          },
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
          include: /node_modules/,
        },
        {
          test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                name: '[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(rootPath, 'src/index.html'),
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
      }),
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
        }),
      ],
    },
  };
  return config;
};