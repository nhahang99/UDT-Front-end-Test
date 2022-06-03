const nodeExternals = require('webpack-node-externals')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  name: 'server',
  entry: {
    server: path.resolve(__dirname, 'server', 'server.tsx')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.ts', '.tsx', 'css', 'scss']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.server.json'
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
  target: 'node',
  node: {
    __dirname: false
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ context: 'server', from: 'views', to: 'views' }]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}
