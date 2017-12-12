module.exports = {
    entry: ['babel-polyfill', './index.js'],
    output: {
      filename: 'bundle.js'
    },
    devtool: 'sourcemap',
    module: {
      loaders: [{
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel'                                              
      }]
    }
  }