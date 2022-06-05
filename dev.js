const spawn = require('cross-spawn')
const path = require('path')
const webpack = require('webpack')
const webpackConfigClient = require('./webpack.config.client')
const webpackConfigServer = require('./webpack.config.server')
const killPort = require('kill-port')
const dotenv = require('dotenv')
dotenv.config()

const compiler = webpack([
  {
    ...webpackConfigClient,
    mode: 'development',
    devtool: 'source-map',
    output: {
      ...webpackConfigClient.output,
      filename: '[name].js'
    }
  },
  {
    ...webpackConfigServer,
    mode: 'development',
    devtool: 'source-map'
  }
])

let node

compiler.hooks.watchRun.tap('Dev', compiler => {
  console.log(`Compiling ${compiler.name} ...`)
  if (compiler.name === 'server' && node) {
    node.kill()
    killPort(process.env.PORT)
    node = undefined
  }
})

compiler.watch({}, (err, stats) => {
  if (err) {
    console.error('dev.js', err)
    killPort(process.env.PORT)
    process.exit(1)
  }
  console.log(stats?.toString('minimal'))
  const compiledSuccessfully = !stats?.hasErrors()
  if (compiledSuccessfully && !node) {
    console.log('Starting Node.js ...')
    node = spawn('node', ['--inspect', path.join(__dirname, 'dist/server.js')], {
      stdio: 'inherit'
    })
  }
})
