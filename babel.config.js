module.exports = {
  presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'],
  plugins: [
    'css-modules-transform',
    {
      preprocessCss: './sass-loader.js',
      camelCase: true,
      extensions: ['.scss']
    },
    'dynamic-import-node'
  ]
}
