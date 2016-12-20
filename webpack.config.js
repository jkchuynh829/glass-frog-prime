var path = require('path');
var webpack = require('webpack');

var BUILD = path.resolve(__dirname, 'client/public');
var CLIENT = path.resolve(__dirname, 'client/app')

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    CLIENT + '/components/main.jsx'
  ],
  output: {
    path: BUILD,
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credential": true,
      "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS, POST, PUT",
      "Access-Control-Allow-Headers": "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    },
    hot: true,
    port: 3000,
    contentBase: 'client/public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react'],
        include: path.join(__dirname, 'client'),
      },
      {
        test: /\.css$/,
        loader: ['style', 'css']
      }
    ]
  }
}