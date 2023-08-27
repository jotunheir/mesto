const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const production = env.production;

  return {
    entry: { index: './src/pages/index.js' },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: production
        ? '[name].[contenthash].js'
        : '[name].js',
      publicPath: production
      ? './'
      : '',
    },
    mode: 'development',
    devServer: {
      static: path.resolve(__dirname, './dist'),
      compress: true,
      port: 8080,
      hot: true,
      open: true
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          use: [production
            ? MiniCssExtractPlugin.loader
            : 'style-loader', {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
            'postcss-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
          type: 'asset/resource',
          generator: {
            filename: '[hash][ext][query]'
          }
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: '/node_modules/'
        }
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: production
          ? '[name].[contenthash].css'
          : '[name].css',
      })
    ],
    devtool: production ? false : 'eval-source-map'
  }
}
