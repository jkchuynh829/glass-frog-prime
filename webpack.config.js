var path = require('path');
var webpack = require('webpack');

var BUILD = path.resolve(__dirname, 'src/client/public');
var CLIENT = path.resolve(__dirname, 'src/client/app')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    CLIENT + '/main.jsx'
  ],
  output: {
    path: BUILD,
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    hot: true,
    inline: true,
    port: 8080,
    contentBase: './src/client'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react'],
        include: path.join(__dirname, 'src'),
      },
    ]
  }
}