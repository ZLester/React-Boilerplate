var webpack = require('webpack');
var path = require('path');
var buildPath = path.resolve(__dirname, 'build');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var TransferWebpackPlugin = require('transfer-webpack-plugin');

var config = {
  //Entry points
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/app/app.jsx')
  ],
  //Config options on how to interpret requires imports
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  //Server Configuration options
  devServer:{
    contentBase: 'src/www',  //Relative directory for base of server
    devtool: 'eval',
    hot: true,        //Live-reload
    inline: true,
    port: 3000
  },
  devtool: 'eval',
  output: {
    path: buildPath,    //Path of output file
    filename: 'app.js'
  },
  plugins: [
    //Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    //Move files
    new TransferWebpackPlugin([
      {from: 'www'}
    ], path.resolve(__dirname, "src"))
  ],
  module: {
    //Loaders to interpret non-vanilla javascript code
    preLoaders: [
      {
        //Eslint loader
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        include: [path.resolve(__dirname, "src/app")],
        exclude: [nodeModulesPath]
      },
    ],
    loaders: [
      {
        //React-hot loader and
        test: /\.(js|jsx)$/,  //All .js and .jsx files
        loaders: ['react-hot','babel-loader?optional=runtime&stage=0'],
        exclude: [nodeModulesPath]
      }
    ]
  },
  eslint: {
    configFile: '.eslintrc'
  },
};

module.exports = config;
