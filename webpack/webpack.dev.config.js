const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.module\.scss$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: { modules: {
              namedExport: false
            } },
          },
          'sass-loader' 
        ],
        include: /src/,
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot:true,
    compress: true,
    port: 3000,
  },
};