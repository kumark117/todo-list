const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebPackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './app/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: /node_modules/,
        exclude: /flexboxgrid/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        include: /flexboxgrid/,
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html'
    }),
    new CleanWebPackPlugin(['dist'])
  ]
}
