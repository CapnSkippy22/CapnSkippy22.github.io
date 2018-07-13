const path = require('path');

module.exports = {
  entry: path.join(__dirname, './public/index.jsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] }
        }],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ]
  }
}