const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/browser.js'
  },
  output: {
    filename: './public/static/app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ ".jsx", ".js", ".json" ]
  },
  devtool: '',
  devServer: {
    contentBase: './public'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.HotModuleReplacementPlugin()
  ]
};
