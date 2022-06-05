const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  name: 'client',
  entry: {
    client: path.resolve(__dirname, 'client/client.tsx')
  },
  output: {
    path: path.resolve(__dirname + '/dist/static'),
    filename: '[name].[contenthash].js',
    publicPath: ''
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.scss']
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.client.json'
        }
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                auto: true,
                localIdentName: '[hash:8]',
                exportOnlyLocals: false
              }
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin()
  ]
}
